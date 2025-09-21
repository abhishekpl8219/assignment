import React, { useContext } from "react";
import { CiStar } from "react-icons/ci";
import { LuNotebook } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { PiCommandThin } from "react-icons/pi";
import { MdNotificationsNone } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { CiTimer } from "react-icons/ci";
import { PiNotebook } from "react-icons/pi";
import Profile from "../Profile/Profile";
import { MdOutlineDarkMode } from "react-icons/md";
import { ThemeContext } from "../../context/themeContext";
const Navbar = () => {
  const { theme, handleOnClick } = useContext(ThemeContext);
  return (
    <div className="navbarmain">
      <div className="navbarleft">
        <Profile />
        <LuNotebook />
        <CiStar style={{ fontSize: "20px" }} />
        <span style={{ color: "gray", marginLeft: "60px" }}>Dashboard</span>
        <span style={{ color: "gray" }}>/</span>
        <span>Default</span>
      </div>
      <div className="navbarright">
        <span>
          <CiSearch
            style={{
              fontSize: "25px",
              marginRight: "10px",
              marginLeft: "0px",
              marginTop: "5px",
            }}
          />
        </span>
        <input type="text" placeholder="Search" className="searchbox" />
        <div className="navbaricons">
          <PiCommandThin />
          <MdNotificationsNone />
          <label onClick={handleOnClick}>
            {theme === "dark" ? <CiLight /> : <MdOutlineDarkMode />}
          </label>

          <CiTimer />
          <PiNotebook />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
