import React from "react";
import {
  Grid,
  Paper,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

function VendorDetails() {
  return (
    <>
      <Typography
        variant="h6" 
        style={{ marginTop: "20px", marginBottom: "10px" }}
      >
        Vendor Details (Name & Address)
      </Typography>
      <TableContainer component={Paper}>
        <Table style={{ minWidth: 400 }}>
          <TableHead>
            <TableRow>
              <TableCell className="borderElement">
                Vendor's Code
              </TableCell>
              <TableCell className="borderElement">
                Vendor's Address
              </TableCell>
              <TableCell className="borderElement">
                Vendor's Reference (if any)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="borderElement">
                <TextField
                  fullWidth
                  variant="outlined"
                  value="Auto-fetch"
                  disabled
                />
              </TableCell>
              <TableCell className="borderElement">
                <TextField
                  fullWidth
                  variant="outlined"
                  value="Auto-fetch"
                  disabled
                />
              </TableCell>
              <TableCell className="borderElement">
                <TextField
                  fullWidth
                  variant="outlined"
                  value="Auto-fetch"
                  disabled
                />
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </>
  );
}

export default VendorDetails;