import "../../App.css";
import { FaRegFolder } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { PiShoppingBagOpenDuotone } from "react-icons/pi";
import { PiChartPieSliceThin } from "react-icons/pi";
import { FaAngleRight } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <div>
      <div className="dashboard">
        <p style={{ color: "gray" }}>Dashboards</p>
        <p className="dashboardelements">
          <FaAngleRight style={{ color: "gray" }} /> <PiChartPieSliceThin />
          Default
        </p>
        <p className="dashboardelements">
          <FaAngleRight style={{ color: "gray" }} />{" "}
          <PiShoppingBagOpenDuotone />
          eCommerce
        </p>
        <p className="dashboardelements">
          {" "}
          <FaAngleRight style={{ color: "gray" }} /> <FaRegFolder />
          Projects
        </p>
        <p className="dashboardelements">
          {" "}
          <FaAngleRight style={{ color: "gray" }} /> <FiBookOpen />
          Online Courses
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
