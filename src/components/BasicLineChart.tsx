import { LineChart } from "@mui/x-charts";
import React from "react";

export default function BasicLineChart() {
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
        <h3 style={{ textAlign: "center",color:"#2196F3" }}>Vehicles/Hour</h3>
        <LineChart
          xAxis={[
            {
              scaleType: "point",
              data: [
                "00:00",
                "01:00",
                "02:00",
                "03:00",
                "04:00",
                "05:00",
                "06:00",
                "07:00",
                "08:00",
                "09:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
                "21:00",
                "22:00",
                "23:00",
              ],
            },
          ]}
          series={[
            {
              data: [
                5, 3, 2, 4.5, 6, 8, 13, 15, 17.5, 22, 20, 19, 26, 20, 23, 24,
                30, 28, 25, 15, 20, 15, 17, 5,
              ],
            },
          ]}
          width={500}
          height={300}
        />
      </div>
    </>
  );
}
