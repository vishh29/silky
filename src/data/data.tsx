import React from "react";
import { GridColDef, GridRowsProp } from "@mui/x-data-grid";
export const tableRows: GridRowsProp = [
  {
    id: 1,
    image: "https://picsum.photos/200",
    site: "Oceanview Resort",
    camera: "Rear Gate",
    plate: "J330",
    vehicle: "Black, Dodge Truck",
    direction: "Entering",
    confidence: 91.37,
    time: "Thu, 19 Dec 2024, 04:19:56 pm",
    alert: "Unauthorized Number",
  },
  {
    id: 2,
    image: "https://picsum.photos/200",
    site: "Parkway Mall",
    camera: "Main Entrance",
    plate: "P472",
    vehicle: "White, Honda SUV",
    direction: "Entering",
    confidence: 81.11,
    time: "Thu, 2 Jan 2025, 07:34:10 pm",
    alert: "No Number Plate",
  },
  {
    id: 3,
    image: "https://picsum.photos/200",
    site: "Oceanview Resort",
    camera: "Main Entrance",
    plate: "A078",
    vehicle: "Blue, BMW Sedan",
    direction: "Exiting",
    confidence: 91.92,
    time: "Tue, 10 Dec 2024, 07:24:34 pm",
    alert: "Unauthorized Number",
  },
  {
    id: 4,
    image: "https://picsum.photos/200", // Replace with actual image URL
    site: "St. Louis Office",
    camera: "Main Entrance",
    plate: "S548",
    vehicle: "Blue, BMW Sedan",
    direction: "Exiting",
    confidence: 99.44,
    time: "Wed, 25 Dec 2024, 04:53:09 am",
    alert: "Unauthorized Number",
  },
  {
    id: 5,
    image: "https://picsum.photos/200", // Replace with actual image URL
    site: "Oceanview Resort",
    camera: "Rear Gate",
    plate: "L234",
    vehicle: "Green, Audi SUV",
    direction: "Entering",
    confidence: 87.66,
    time: "Tue, 24 Dec 2024, 05:04:53 pm",
    alert: "Stolen",
  },
  {
    id: 6,
    image: "https://picsum.photos/200", // Replace with actual image URL
    site: "St.Louis Office",
    camera: "Rear Gate",
    plate: "S700",
    vehicle: "Black, Dodge Truck",
    direction: "Exiting",
    confidence: 84.63,
    time: "Tue, 17 Dec 2024, 01:44:51 am",
    alert: "Unauthorized Number",
  },
  {
    id: 7,
    image: "https://picsum.photos/200", // Replace with actual image URL
    site: "Oceanview Resort",
    camera: "Exit Lane",
    plate: "X893",
    vehicle: "White, Honda SUV",
    direction: "Entering",
    confidence: 92.38,
    time: "Mon, 16 Dec 2024, 09:56:31 pm",
    alert: "Unauthorized Number",
  },
  {
    id: 8,
    image: "https://picsum.photos/200", // Replace with actual image URL
    site: "Central Station",
    camera: "Rear Gate",
    plate: "M604",
    vehicle: "White, Honda SUV",
    direction: "Exiting",
    confidence: 85.79,
    time: "Fri, 6 Dec 2024, 03:34:33 am",
    alert: "No Number Plate",
  },
  {
    id: 9,
    image: "https://picsum.photos/200", // Replace with actual image URL
    site: "Parkway Mall",
    camera: "Service Entrance",
    plate: "V212",
    vehicle: "Silver, Ford sedan",
    direction: "Exiting",
    confidence: 85.54,
    time: "Wed, 1 Jan 2025, 09:10:45 am",
    alert: "Wrong Direction",
  },
  {
    id: 10,
    image: "https://picsum.photos/200", // Replace with actual image URL
    site: "Parkway Mall",
    camera: "Rear Gate",
    plate: "X728",
    vehicle: "Red, Toyota Pickup",
    direction: "Entering",
    confidence: 97.07,
    time: "Mon, 30 Dec 2024, 08:43:54 am",
    alert: "Speed",
  },
];

export const tableColumns: GridColDef[] = [
  {
    field: "image",
    headerName: "Image",
    width: 70,
    renderCell: () => (
      <img
        src="https://picsum.photos/200"
        style={{ width: "52px", margin: "0 auto", display: "flex" }}
      />
    ),
  },
  { field: "site", headerName: "Site", width: 150 },
  { field: "camera", headerName: "Camera", width: 150 },
  { field: "plate", headerName: "Plate", width: 150 },
  { field: "vehicle", headerName: "Vehicle", width: 150 },
  { field: "direction", headerName: "Direction", width: 150 },
  { field: "confidence", headerName: "Confidence", width: 150 },
  { field: "time", headerName: "Time", width: 150 },
  { field: "alert", headerName: "Alert Type", width: 150 },
];
