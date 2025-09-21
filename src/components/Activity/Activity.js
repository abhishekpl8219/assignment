import React from "react";
import { LuUserRound } from "react-icons/lu";
const Activity = () => {
  return (
    <div className="notify">
      <h6 style={{ marginBottom: "15px" }}>Activities</h6>
      <p>
        {" "}
        <LuUserRound className="notifcationicons" />
        You have a bug that needs...
      </p>
      <span className="spanitems">Just Now</span>
      <p>
        {" "}
        <LuUserRound className="notifcationicons" />
        Released a new version
      </p>
      <span className="spanitems"> 59 minutes Ago</span>
      <p>
        {" "}
        <LuUserRound className="notifcationicons" />
        Submitted a bug
      </p>
      <span className="spanitems"> 12 Hours Ago</span>
      <p>
        {" "}
        <LuUserRound className="notifcationicons" />
        Modififed a data in page X
      </p>
      <span className="spanitems"> Today 11.59AM</span>
      <p>
        {" "}
        <LuUserRound className="notifcationicons" />
        Deleted a page in project X
      </p>
      <span className="spanitems"> Today 11.59AM</span>
    </div>
  );
};

export default Activity;
