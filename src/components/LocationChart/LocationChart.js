import React from "react";
import myImage from "../../assets/image.png";
const LocationChart = () => {
  const revenueData = [
    { city: "New York", revenue: 72000 },
    { city: "San Francisco", revenue: 39000 },
    { city: "Sydney", revenue: 25000 },
    { city: "Singapore", revenue: 61000 },
  ];

  // Max revenue to normalize progress bars
  const maxRevenue = Math.max(...revenueData.map((d) => d.revenue));

  return (
    <div
      style={{
        width: "350px",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        fontFamily: "sans-serif",
      }}
      className="revenuebylocation"
    >
      <h3 style={{ marginBottom: "15px", textAlign: "center" }}>
        Revenue by Location
      </h3>

      {/* World Map Placeholder */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src={myImage}
          alt="World Map"
          style={{ width: "100%", maxHeight: "100px", objectFit: "contain" }}
        />
        {/* Optional: Add black dots on locations using absolute positioning */}
      </div>

      {/* Revenue Bars */}
      <div>
        {revenueData.map((item, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
                fontSize: "14px",
              }}
            >
              <span>{item.city}</span>
              <span>{(item.revenue / 1000).toFixed(0)}K</span>
            </div>
            <div
              style={{
                height: "8px",
                backgroundColor: "#e0e0e0",
                borderRadius: "4px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${(item.revenue / maxRevenue) * 100}%`,
                  height: "100%",
                  backgroundColor: "#5b8def",
                  borderRadius: "4px",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationChart;
