import React from "react";
import "../App.css";
import Navbar from "../components/Navbar/Navbar";
import Frame from "../components/Frame/Frame";
import Dashboard from "../components/Dashboard/Dashboard";
import Page from "../components/PageSections/Page";
import Orderlist from "../components/Orderlist/Orderlist";
import OrderTable from "../components/OrderListTable/OrderTable";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <>
        <div className="home">
          <div>
            <Frame />
            <Dashboard />
            <Page />
          </div>
          <div>
            <div>
              <Orderlist />
            </div>
            <div>
              <OrderTable />
            </div>
          </div>
          <div></div>
        </div>
      </>
    </>
  );
};

export default HomePage;
