import React, { useState } from 'react';
import { Typography, Grid, FormControlLabel, Checkbox, Box, Divider } from '@material-ui/core';
import GDCComponent from './GDCTrue';
import IDTComponent from './IDTTrue';
import ImportTrue from './ImportTrue';

const ApprovalRequirements = () => {
  
  const [showGDC, setShowGDC] = useState(false);
  const [showIDT, setShowIDT] = useState(false);
  const [showImport, setShowImport] = useState(false);

  

  return (
    <>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox checked={showGDC} onChange={(e) => setShowGDC(e.target.checked)} />}
            label="GDC"
          />
          <FormControlLabel
            control={<Checkbox checked={showIDT} onChange={(e) => setShowIDT(e.target.checked)} />}
            label="IDT"
          />
          <FormControlLabel
            control={<Checkbox checked={showImport} onChange={(e) => setShowImport(e.target.checked)} />}
            label="Import"
          />
        </Grid>
      </Grid>

      {showGDC && (
        <Box mt={2}>
          <Divider class="divider" />
          <Typography variant="h6">GDC Component</Typography>
          <GDCComponent />
        </Box>
      )}
      {showIDT && (
        <Box mt={2}>
          <Divider class="divider" />
          <Typography variant="h6">IDT Component</Typography>
          <IDTComponent />
        </Box>
      )}
      {showImport && (
        <Box mt={2}>
          <Divider class="divider" />
          <Typography variant="h6">Import Component</Typography>
          <ImportTrue />
        </Box>
      )}
    </>
  );
};

export default ApprovalRequirements;