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
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                Vendor's Code
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                Vendor's Address
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                Vendor's Reference (if any)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  value="Auto-fetch"
                  disabled
                />
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                <TextField
                  fullWidth
                  variant="outlined"
                  value="Auto-fetch"
                  disabled
                />
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
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