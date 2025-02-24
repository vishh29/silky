import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";

const CardComponent = ({ title, value, color, icon }) => {
  return (
    <Card>
      <CardContent
        sx={{
          backgroundColor: color,
          color: "#fff",
          minWidth: 300,
          p: "6px 0",
        }}
      >
        <Typography
          variant="body1"
          margin={0}
          paddingX={0}
          textAlign={"center"}
        >
          {title}
        </Typography>
      </CardContent>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        paddingX={2}
      >
        <Typography variant="body1" p={"10px 5px"}>
          {value}
        </Typography>
        {icon}
      </Box>
      <Button
        fullWidth
        disabled
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#dbdbdb",
        }}
      >
        <span>View Details</span> <ArrowForwardIosIcon />
      </Button>
    </Card>
  );
};

export default CardComponent;
