import { Card, CardContent, Typography, Box } from "@mui/material";
import React from "react";

const CardComponent = ({ title, value, color, icon }) => {
  return (
    <Card sx={{ backgroundColor: color, color: "#fff", minWidth: 200 }}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h4">{value}</Typography>
          {icon}
        </Box>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
