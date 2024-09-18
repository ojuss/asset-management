import React, { useState } from "react";
import {
  Typography,
  Grid,
  FormControlLabel,
  Checkbox,
  Box,
  Divider,
} from "@material-ui/core";
import GDCComponent from "./GDCTrue";
import IDTComponent from "./IDTTrue";
import ImportTrue from "./ImportTrue";

const ApprovalRequirements = () => {
  return (
    <div>
      {/* <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControlLabel label="IDT" />
          <FormControlLabel label="Import" />
        </Grid>
      </Grid> */}
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
