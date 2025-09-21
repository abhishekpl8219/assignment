import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data including Fashion
const data = [
  { name: "Books", value: 200 },
  { name: "Appliances", value: 300 },
  { name: "Electronics", value: 400 },
  { name: "Fashion", value: 250 },
];

// Colors for slices
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const DonutChart = () => {
  return (
    <div>
      <h2> Total Sales Distribution (Donut Chart)</h2>

      {/* Donut Chart */}
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60} // Creates the hole
              outerRadius={100}
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* List of data items, one per row */}
      <div style={{ marginTop: "20px" }}>
        {data.map((item, index) => (
          <p key={index}>
            {item.name} - {item.value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DonutChart;
