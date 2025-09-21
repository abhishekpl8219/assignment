import React from "react";
import { LuPlus } from "react-icons/lu";
import { RiArrowUpDownFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
const Orderlist = () => {
  return (
    <>
      <p style={{ marginTop: "10px" }}>Order list </p>
      <div className="orderlist">
        <div className="orderlisticons">
          <LuPlus />
          <GiHamburgerMenu />
          <RiArrowUpDownFill />
        </div>
        <div className="ordersearchicon">
          <span>
            <CiSearch
              style={{
                fontSize: "25px",
                marginRight: "10px",
                marginLeft: "20px",
                marginTop: "1px",
              }}
            />
          </span>
          <input type="text" placeholder="Search" className="searchbox" />
        </div>
      </div>
    </>
  );
};

export default Orderlist;
