import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", actual: 18, projection: 22 },
  { name: "Feb", actual: 20, projection: 25 },
  { name: "Mar", actual: 19, projection: 22 },
  { name: "Apr", actual: 22, projection: 27 },
  { name: "May", actual: 15, projection: 18 },
  { name: "Jun", actual: 21, projection: 25 },
];

export default function ProjectionsVsActuals() {
  return (
    <div className="chart-container">
      <h2 className="chart-title">Projections vs Actuals</h2>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data} barGap={0}>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#eaeaea"
          />
          <XAxis dataKey="name" axisLine={false} tickLine={false} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `${v}M`}
          />
          <Tooltip formatter={(value) => `${value}M`} />
          {/* Actual values */}
          <Bar
            dataKey="actual"
            stackId="a"
            fill="#6ba5f2"
            radius={[4, 4, 0, 0]}
          />
          {/* Projection values */}
          <Bar
            dataKey="projection"
            stackId="a"
            fill="#c9defa"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
