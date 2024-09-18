import React from "react";
import {
  Paper,
  TextField,
  Typography,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

export default function GoodsSection() {
  const cells = Array(11).fill(null);

  const headers = [
    "Sr No",
    "Tool PO No",
    "Tool No",
    "Asset No",
    "Description",
    "Unit Code",
    "Qty Advised",
    "Qty Dispatched / Receipt",
    "941 Movement No",
    "Rate",
    "WDV Value/ Amount",
  ];

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
              {headers.map((header, index) => (
                <TableCell key={index} className="borderElement">
                  {header}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              {cells.map((_, index) => (
                <TableCell key={index} className="borderElement">
                  <TextField
                    variant="outlined"
                    size="small"
                    inputProps={{ readOnly: true }}
                  />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
    </>
  );
}
