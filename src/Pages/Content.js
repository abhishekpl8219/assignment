import "../App.css";
import Frame from "../components/Frame/Frame";
import Dashboard from "../components/Dashboard/Dashboard";
import Page from "../components/PageSections/Page";
import Notification from "../components/Notifications/Notification";

import Activity from "../components/Activity/Activity";
import Contact from "../components/Contact/Contact";
import TopSelling from "../components/TopSellingProducts/TopSelling";
import MyPieChart from "../components/PieChart/MyPieChart";
import LocationChart from "../components/LocationChart/LocationChart";
import LineRevenueChart from "../components/LineRevenueChart/LineRevenueChart";
import ProjectionsVsActuals from "../components/BarChart/BarChart";
import DashboardCards from "../components/DashboardCards/DarshboardCard";

import Navbar from "../components/Navbar/Navbar";

const Content = () => {
  return (
    <>
      <Navbar />

      <div className="content">
        <div className="navbarprofile">
          <Frame />
          <Dashboard />
          <Page />
        </div>
        <div className="contentNavbar">
          <div className="dashboard-row">
            <DashboardCards />
            <ProjectionsVsActuals />
          </div>
          <div className="dashboard-row">
            <LineRevenueChart />
            <LocationChart />
          </div>

          <div className="dashboard-row">
            <TopSelling />
            <MyPieChart />
          </div>
        </div>
        <div>
          <Notification />
          <Activity />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Content;
