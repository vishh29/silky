import React from "react";
import { BarChart } from "@mui/x-charts";

export default function BasicBarChart() {
  return (
    <>
      <BarChart
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
    </>
  );
}
