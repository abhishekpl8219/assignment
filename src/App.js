import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Content from "./Pages/Content";
import { ThemeContext, themes } from "./context/themeContext";
import { useEffect, useState } from "react";
function App() {
  const [theme, setTheme] = useState(themes.light);

  //btn
  function handleOnClick() {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  }
  useEffect(() => {
    const body = document.body;

    switch (theme) {
      case themes.light:
        body.classList.remove("bg-dark", "text-light");
        body.classList.add("bg-light", "text-dark");
        break;

      case themes.dark:
        body.classList.remove("bg-light", "text-dark");
        body.classList.add("bg-dark", "text-light");
        break;

      default:
        body.classList.remove("bg-dark", "text-light");
        body.classList.add("bg-light", "text-dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleOnClick }}>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/content" element={<HomePage />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
