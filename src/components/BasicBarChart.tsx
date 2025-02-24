import React from "react";
import { BarChart } from "@mui/x-charts";

export default function BasicBarChart() {
  return (
    <>
      <div
        style={{
          flexGrow: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          border: "1px solid rgba(224, 224, 224, 1)",
          borderRadius: "2px",
        }}
      >
        <h3 style={{ textAlign: "center", color: "#2196F3" }}>Vehicle Type</h3>
        <BarChart
          title="Vehicle Type"
          xAxis={[
            {
              id: "Vehicle Type",
              data: ["Sedan", "SUV", "Truck", "Motorcycle", "Van", "Bus"],
              scaleType: "band",
            },
          ]}
          series={[{ data: [150, 190, 30, 20, 100, 25] }]}
          width={500}
          height={300}
        />
      </div>
    </>
  );
}
