import React from "react";
import { PiBugBeetleLight } from "react-icons/pi";
import { LuUserRound } from "react-icons/lu";
import { PiBroadcastBold } from "react-icons/pi";
const Notification = () => {
  return (
    <div className="notify">
      <h6 style={{ marginBottom: "15px" }}>Notifications</h6>
      <p style={{}}>
        {" "}
        <PiBugBeetleLight className="notifcationicons" />
        You have a bug that needs...
      </p>
      <span className="spanitems">Just Now</span>
      <p>
        {" "}
        <LuUserRound className="notifcationicons" />
        New User Registered
      </p>
      <span className="spanitems"> 59 minutes Ago</span>
      <p>
        {" "}
        <PiBugBeetleLight className="notifcationicons" />
        You have a bug that needs...
      </p>
      <span className="spanitems"> 12 Hours Ago</span>
      <p>
        {" "}
        <PiBroadcastBold className="notifcationicons" />
        You have a bug that needs...
      </p>
      <span className="spanitems"> Today 11.59AM</span>
    </div>
  );
};

export default Notification;
