import React from "react";
import "../../App.css";
import { ImProfile } from "react-icons/im";
import { RiAccountBoxLine } from "react-icons/ri";
import { MdPeopleOutline } from "react-icons/md";
import { PiNotebook } from "react-icons/pi";
import { TbMessageCircle } from "react-icons/tb";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Page = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="pages">
      <div className="frameFont">Pages</div>
      <div>
        <label onClick={() => setOpen(!open)} className="labels">
          {open ? (
            <FaAngleDown style={{ color: "gray", marginRight: "5px" }} />
          ) : (
            <FaAngleRight style={{ color: "gray" }} />
          )}
          <ImProfile style={{ marginRight: "5px", marginTop: "5px" }} />
          User Profile
          {open}
        </label>
      </div>
      {open && (
        <div>
          {" "}
          <p className="pageslements"> Projects</p>{" "}
          <p className="pageslements">Compaigns</p>{" "}
          <p className="pageslements">Documents</p>{" "}
          <p className="pageslements">Followers</p>
        </div>
      )}
      <p className="pageouterlements">
        <FaAngleRight style={{ color: "gray" }} /> <RiAccountBoxLine />
        Account
      </p>
      <p className="pageouterlements">
        <FaAngleRight style={{ color: "gray" }} /> <MdPeopleOutline />
        Corporate
      </p>
      <p className="pageouterlements">
        <FaAngleRight style={{ color: "gray" }} />
        <PiNotebook />
        Blog
      </p>
      <p className="pageouterlements">
        <FaAngleRight style={{ color: "gray" }} /> <TbMessageCircle />
        Social
      </p>
      <p className="pageouterlements">
        <Link to="/" className="nav-link">
          PAGE1
        </Link>
      </p>
      <p className="pageouterlements">
        <Link to="/content" className="nav-link">
          PAGE2
        </Link>
      </p>
    </div>
  );
};

export default Page;
