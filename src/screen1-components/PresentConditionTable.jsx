import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
} from '@material-ui/core';

export default function PresentConditionTable() {
  const headers = [
    'Asset Code / No.',
    'Asset Description',
    'Asset Type',
    'PO No.',
    'PO Line Item No.',
    'PO Line Item Description',
    'Performance to be expected',
    'Performance achieved by the',
    'Major defects in the assets',
    'Condition of the assets',
    'Are any parts missing?',
  ];

  return (
    <TableContainer component={Paper} style={{ maxWidth: '100%', overflowX: 'auto' }}>
      <Table style={{ minWidth: 1600 }}>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index} style={{ borderRight: '1px solid #ccc' }}>
                {header}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            {headers.map((_, index) => (
              <TableCell key={index} style={{ borderRight: '1px solid #ccc' }}>
                <TextField
                  variant="outlined"
                  size="small"
                  InputProps={{ readOnly: true }}
                />
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}
