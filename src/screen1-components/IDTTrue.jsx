import React from "react";
import { MenuItem, TextField, Grid, Typography, Table, TableCell, TableContainer, TableHead, TableRow, Paper, Divider, Button, Box } from "@material-ui/core";
import Attachements from "./Attachements";



function IDTTrue() {

    const cells = Array(11).fill(null); 

    const headers = [
        'Asset Code / No.',
        'Asset Description',
        'Asset Type',
        'PO No.',
        'PO Line Item No.',
        'PO Line Item Description',
        'GST%',
        'SGST%',
        'IGST%',
        'HSN Code',
        'Remarks'
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
        <Typography variant="h6" gutterBottom> IDT Comments </Typography>
        <TableContainer component={Paper} className="table-container">
            <Table style={{ minWidth: 800 }}>
                <TableHead>
                <TableRow>
                    <TableCell colSpan={6} align="center" className="borderElement">
                        Details of Assets
                    </TableCell>
                    <TableCell colSpan={5} align="center">
                        IDT Comments
                    </TableCell>
                </TableRow> 
                <TableRow>
                    {headers.map((header, index) => (
                    <TableCell key={index} className="borderElement">
                        {header}
                    </TableCell>
                    ))}

                </TableRow>
                <TableRow>
                    {cells.map((_, index) => (
                    <TableCell key={index} className="borderElement">
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

export default IDTTrue;