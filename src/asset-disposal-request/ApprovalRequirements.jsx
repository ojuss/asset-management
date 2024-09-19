import React from "react";
import {
  Typography,
  Box,
  Divider,
} from "@material-ui/core";
import IDTComponent from "./IDTTrue";
import ImportTrue from "./ImportTrue";

const ApprovalRequirements = () => {
  return (
    <div>
      <Box mt={2}>
        <Divider class="divider" />
        <Typography variant="h6">IDT Component</Typography>
        <IDTComponent />
      </Box>
      <Box mt={2}>
        <Divider class="divider" />
        <Typography variant="h6">Import Component</Typography>
        <ImportTrue />
      </Box>
    </div>
  );
};

export default ApprovalRequirements;
