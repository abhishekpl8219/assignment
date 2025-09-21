import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
const OrderTable = () => {
  const [users, setUsers] = useState([]);
  const [currentpage, setCurrentPage] = useState(0);
  const pageSize = 10;
  const totalUsers = users.length;
  const startPage = currentpage * pageSize;
  const endPage = startPage + pageSize;
  const numberOfPage = Math.ceil(totalUsers / pageSize);
  const fetchData = async () => {
    try {
      const data = await fetch("https://dummyjson.com/users?limit=50");
      const json = await data.json();
      console.log("json", json);
      setUsers(json.users);
    } catch (error) {
      toast.error("something went wrong while fetching the users data");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <table>
        <tr>
          <th>
            {" "}
            <input type="checkbox" />
          </th>
          <th>Order ID</th>
          <th>User</th>
          <th>Project</th>
          <th>Address</th>
          <th>Date</th>
          <th>Status</th>
        </tr>

        <tr>
          <td
            colSpan="7"
            style={{ borderTop: "1px solid lightgray", padding: 0 }}
          ></td>
        </tr>
        {users.slice(startPage, endPage).map((item, index) => (
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>
              #CM98
              {item.id}
            </td>
            <td>
              <img
                src={item.image}
                alt={item.firstName}
                style={{
                  borderRadius: "20px",
                  width: "25px",
                  border: "1px solid black",
                  marginRight: "20px",
                }}
              />
              {item.firstName}
            </td>
            <td>{item.password}</td>
            <td>{item.address.address}</td>
            <td>{item.birthDate}</td>
            <td>{index % 2 === 0 ? "Complete" : "Pending"}</td>
          </tr>
        ))}
      </table>

      <div className="pagescollection">
        <button
          disabled={currentpage === 0}
          onClick={() => setCurrentPage(currentpage - 1)}
          className="btn"
        >
          <GrFormPrevious />
        </button>
        {[...Array(numberOfPage)].keys().map((n) => (
          <span
            className={"pageNumber" + (n === currentpage ? "Active" : "")}
            onClick={() => setCurrentPage(n)}
            style={{ cursor: "pointer" }}
          >
            {n + 1}
          </span>
        ))}
        <button
          disabled={currentpage === numberOfPage - 1}
          onClick={() => setCurrentPage(currentpage + 1)}
          className="btn"
          style={{ cursor: "pointer" }}
        >
          <GrFormNext />
        </button>
      </div>
    </div>
  );
};

export default OrderTable;
