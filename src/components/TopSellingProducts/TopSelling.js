import React from "react";
import { topsellingdata } from "../FetchData/FetchData";

const TopSelling = () => {
  return (
    <div className="topselling">
      <h6> Top Selling Products</h6>
      <table
        style={{
          width: "100%",
          borderCollapse: "separate", // allow border-spacing to work
          borderSpacing: "0 15px",
          // vertical space between rows: 10px
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {topsellingdata.map((item, index) => (
            <tr key={index} style={{ backgroundColor: "#f9f9f9" }}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopSelling;
