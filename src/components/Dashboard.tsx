import { Grid2, Box } from "@mui/material";
import {
  Camera,
  LocationOn,
  DirectionsCar,
  NotificationsActive,
} from "@mui/icons-material";
import React from "react";
import CardComponent from "./CardComponent";
import ANPRTable from "./ANPRTable";
import BasicBarChart from "./BasicBarChart";
import BasicLineChart from "./BasicLineChart";
import Map from "./Map";

const Dashboard = () => {
  const data = [
    { title: "Cameras", value: 12, color: "#2196F3", icon: <Camera /> },
    { title: "Sites", value: 10, color: "#9C27B0", icon: <LocationOn /> },
    {
      title: "Plates this week",
      value: "120.5k",
      color: "#4CAF50",
      icon: <DirectionsCar />,
    },
    {
      title: "Recent Alerts",
      value: 2575,
      color: "#F44336",
      icon: <NotificationsActive />,
    },
  ];

  return (
    <Box>
      <Grid2 container spacing={10}>
        {data.map((item, index) => (
          <Grid2 key={index}>
            <CardComponent {...item} />
          </Grid2>
        ))}
      </Grid2>
      <ANPRTable />
      <div
        id="charts"
        style={{
          display: "flex",
          flexGrow: "1",
          width: "100%",
          flexWrap: "wrap",
          marginTop: 30,
          gap: 40,
        }}
      >
        <BasicBarChart />
        <BasicLineChart />
      </div>
      <div style={{ overflow: "hidden" }}>
        <h3
          style={{
            textAlign: "center",
            color: "#2196F3",
            margin: 0,
            marginTop: 30,
          }}
        >
          Camera Locations
        </h3>
        <Map />
      </div>
    </Box>
  );
};

export default Dashboard;
