import React from "react";

const metrics = [
  {
    title: "Customers",
    value: "3,781",
    change: "+11.01%",
    positive: true,
    bg: "#e8f4ff",
  },
  {
    title: "Orders",
    value: "1,219",
    change: "-0.03%",
    positive: false,
    bg: "#fff",
  },
  {
    title: "Revenue",
    value: "$695",
    change: "+15.03%",
    positive: true,
    bg: "#fff",
  },
  {
    title: "Growth",
    value: "30.1%",
    change: "+6.08%",
    positive: true,
    bg: "#f1f5ff",
  },
];

export default function DashboardCards() {
  return (
    <div className="cards-grid">
      {metrics.map((item, idx) => (
        <div key={idx} className="card" style={{ backgroundColor: item.bg }}>
          <h4 className="card-title">{item.title}</h4>
          <p className="card-value">{item.value}</p>
          <span
            className={`card-change ${item.positive ? "positive" : "negative"}`}
          >
            {item.change}{" "}
            <span className="arrow">{item.positive ? "↑" : "↓"}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
