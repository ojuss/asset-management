import React from "react";
import { MenuItem, TextField, Grid, Typography, Table, TableCell, TableContainer, TableHead, TableRow, Paper, Select, FormControl, InputLabel, Divider, Button, Box } from "@material-ui/core";
import Attachements from "./Attachements";



function GDCTrue() {

    const cells = Array(9).fill(null); 

    const headers = [
        'Asset Code / No.',
        'Asset Description',
        'Asset Type',
        'PO No.',
        'PO Line Item No.',
        'PO Line Item Description',
        'Original Asset Value',
        'Present Written Down Value',
        'Remark'
      ];
  return (
    <div>
      <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="Request Ref No." fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Request Date" fullWidth variant="outlined" type="date" InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Proposer / Raiser Name" fullWidth variant="outlined" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField label="Division" fullWidth variant="outlined" select>
                <MenuItem value="Division 1">Division 1</MenuItem>
                <MenuItem value="Division 2">Division 2</MenuItem>
              </TextField>
            </Grid>
        </Grid>
        <Divider class="divider" />
        <Typography variant="h6" gutterBottom> GDC Comments </Typography>
        <TableContainer component={Paper} style={{ maxWidth: '100%', overflowX: 'auto' }}>
            <Table style={{ minWidth: 800 }}>
                <TableHead> 
                <TableRow>
                    {headers.map((header, index) => (
                    <TableCell key={index} style={{ borderRight: '1px solid #ccc' }}>
                        {header}
                    </TableCell>
                    ))}

                </TableRow>
                <TableRow>
                    {cells.map((_, index) => (
                    <TableCell key={index} style={{ borderRight: '1px solid #ccc' }}>
                      <TextField variant="outlined" size="small" inputProps={{ readOnly : true}}/>
                    </TableCell>
                  ))}
                </TableRow>
                </TableHead>
                
            </Table>
        </TableContainer>
        <Divider class="divider" />
        <Typography variant="h6" gutterBottom> Attachements </Typography>
        <Attachements />
        <Box display="flex" justifyContent="space-between" mt={2}>
            <Button variant="contained" color="secondary">
              Reject
            </Button>
            <Button variant="contained" color="primary">
              Submit
            </Button>
        </Box>
    </div>
  );
};

export default GDCTrue;