import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", current: 13000000, previous: 8000000 },
  { month: "Feb", current: 9000000, previous: 15000000 },
  { month: "Mar", current: 10000000, previous: 14000000 },
  { month: "Apr", current: 15000000, previous: 12000000 },
  { month: "May", current: 18000000, previous: 13000000 },
  { month: "Jun", current: 20000000, previous: 22000000 },
];

const LineRevenueChart = () => {
  return (
    <div>
      <h6> Revenue </h6>

      <p>Current Week $58211</p>
      <p>Previous Week $68768</p>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 50, bottom: 0 }} // increased left
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis
            tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="current"
            stroke="#000"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="previous"
            stroke="#90caf9"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineRevenueChart;
