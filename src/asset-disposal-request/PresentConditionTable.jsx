import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from "@material-ui/core";

export default function PresentConditionTable() {
  const headers = [
    "Asset Code / No.",
    "Asset Description",
    "Asset Type",
    "PO No.",
    "PO Line Item No.",
    "PO Line Item Description",
    "Performance to be expected",
    "Performance achieved by the",
    "Major defects in the assets",
    "Condition of the assets",
    "Are any parts missing?",
  ];
  const cellsFilled = Array(6).fill(null);
  const cells = Array(5).fill(null);
  return (
    <TableContainer component={Paper} className="table-container">
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
            {cellsFilled.map((_, index) => (
              <TableCell key={index} className="borderElement">
                <TextField
                  variant="outlined"
                  size="small"
                  InputProps={{ readOnly: true }}
                />
              </TableCell>
            ))}
            {cells.map((_, index) => (
              <TableCell key={index} className="borderElement">
                <TextField variant="outlined" size="small" />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}
