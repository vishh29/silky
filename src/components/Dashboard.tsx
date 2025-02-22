import { Grid, Box } from "@mui/material";
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
    <Box sx={{ padding: 3, marginLeft: 1 }}>
      <Grid container spacing={15}>
        {data.map((item, index) => (
          <Grid item key={index}>
            <CardComponent {...item} />
          </Grid>
        ))}
      </Grid>
      <ANPRTable />
      <div style={{ display: "flex" }}>
        <BasicBarChart />
        <BasicLineChart />
      </div>
      <div
        style={{
          position: "relative",
          width: "500px",
          height: "500px",
          overflow: "hidden",
        }}
      >
        <Map />
      </div>
    </Box>
  );
};

export default Dashboard;
