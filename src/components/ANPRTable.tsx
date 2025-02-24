import * as React from "react";
import Paper from "@mui/material/Paper";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";
import { tableRows, tableColumns } from "../data/data";

const ANPRTable = () => {
  return (
    <Box sx={{ marginTop: 5, width: "100%" }}>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid
          rows={tableRows}
          columns={tableColumns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </Box>
  );
};

export default ANPRTable;
