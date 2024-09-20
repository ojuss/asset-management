import React, { useState } from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";

const AssetTable = () => {
  const headers = [
    "Asset Description",
    "Asset Type",
    "PO No.",
    "PO Line Item No.",
    "PO Line Item Description",
    "Asset Type Selection",
    "Present Location",
    "Name of Vendor",
    "Vendor Code",
    "Year of Purchase/Installation",
    "Name of Manufacturer",
    "Country of Origin",
    "Manufacturer Serial Number",
    "Model/ Project of Asset",
    "Number of Loose Parts/Aggregates",
    "Quantity",
    "Weight of Asset(in kg)",
    "Overall Size of Asset(H x W x L)",
    "Performance expected to be achieved by the Asset",
    "Performance achieved by the Asset",
    "Major defects in the Asset",
    "Condition of the Asset",
    "Are any parts missing",
    "Original asset value",
    "Present written down value",
  ];

  return (
    <>
      <TableContainer
        component={Paper}
        className="table-container"
        style={{ marginBottom: 12 }}
      >
        <Table style={{ minWidth: 4100 }}>
          <TableHead>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell key={index} className="borderElement">
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              {headers.map((_, index) => (
                <TableCell key={index} className="borderElement">
                  <TextField variant="outlined" size="small" />
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AssetTable;
