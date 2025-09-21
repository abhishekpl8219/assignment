import React from "react";
import "../../App.css";
const Frame = () => {
  return (
    <div className="frame">
      <div className="frameheading">
        <div className="frameFont">Favorites</div>
        <div className="frameFont">Recently</div>
      </div>
      <div className="frameItems">
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
          <li style={{ marginBottom: "5px" }}>Overview</li>
          <li>Projects</li>
        </ul>
      </div>
    </div>
  );
};

export default Frame;
