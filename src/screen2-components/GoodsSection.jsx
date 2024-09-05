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

export default function GoodsSection() {
  return (
    <>
      <Typography
        variant="h6"
        style={{ marginTop: "20px", marginBottom: "10px" }}
      >
        Please arrange to send / Receive the following goods
      </Typography>
      <TableContainer component={Paper}>
        <Table style={{ minWidth: 1600 }}>
          <TableHead>
            <TableRow>
              <TableCell>Sr No</TableCell>
              <TableCell>Tool PO No</TableCell>
              <TableCell>Tool No</TableCell>
              <TableCell>Asset No</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Unit Code</TableCell>
              <TableCell>Qty Advised</TableCell>
              <TableCell>Qty Dispatched / Receipt</TableCell>
              <TableCell>941 Movement No</TableCell>
              <TableCell>Rate</TableCell>
              <TableCell>WDV Value/ Amount</TableCell>
            </TableRow>
            <TableRow>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                <TextField variant="outlined" size="small" />
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                <TextField variant="outlined" size="small" />
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                <TextField variant="outlined" size="small" />
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                <TextField variant="outlined" size="small" />
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                <TextField variant="outlined" size="small" />
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                <TextField variant="outlined" size="small" />
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                <TextField variant="outlined" size="small" />
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                <TextField variant="outlined" size="small" />
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                <TextField variant="outlined" size="small" />
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                <TextField variant="outlined" size="small" />
              </TableCell>
              <TableCell style={{ borderRight: "1px solid #ccc" }}>
                <TextField variant="outlined" size="small" />
              </TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </>
  );
}
