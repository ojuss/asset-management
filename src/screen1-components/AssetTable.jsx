import React from 'react';
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from '@material-ui/core';

export default function AssetTable() {
  const headers = [
    'Asset Code / No.',
    'Asset Description',
    'Asset Type',
    'PO No.',
    'PO Line Item No.',
    'PO Line Item Description',
    'Asset Type Selection',
    'Present Location',
    'Name of Vendor',
    'Vendor Code',
    'Year of Purchase/Installation',
    'Name of Manufacturer',
    'Model/Project',
    'Model/Project',
  ];

  return (
    <TableContainer component={Paper} className="table-container">
      <Table style={{ minWidth: 2200 }}>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={index} className="borderElement">
                {header}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell className="borderElement">
              <TextField variant="outlined" size="small" />
            </TableCell>
            <TableCell className="borderElement">
              <TextField variant="outlined" size="small" />
            </TableCell>
            <TableCell className="borderElement">
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel></InputLabel>
                <Select defaultValue="">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Option1">Option 1</MenuItem>
                  <MenuItem value="Option2">Option 2</MenuItem>
                  <MenuItem value="Option3">Option 3</MenuItem>
                </Select>
              </FormControl>
            </TableCell>
            <TableCell className="borderElement">
              <TextField variant="outlined" size="small" />
            </TableCell>
            <TableCell className="borderElement">
              <TextField variant="outlined" size="small" />
            </TableCell>
            <TableCell className="borderElement">
              <TextField variant="outlined" size="small" />
            </TableCell>
            <TableCell className="borderElement">
              <FormControl variant="outlined" size="small" fullWidth>
                <InputLabel></InputLabel>
                <Select defaultValue="">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Option1">Option 1</MenuItem>
                  <MenuItem value="Option2">Option 2</MenuItem>
                  <MenuItem value="Option3">Option 3</MenuItem>
                </Select>
              </FormControl>
            </TableCell>
            <TableCell className="borderElement">
              <TextField variant="outlined" size="small" />
            </TableCell>
            <TableCell className="borderElement">
              <TextField variant="outlined" size="small" />
            </TableCell>
            <TableCell className="borderElement">
              <TextField variant="outlined" size="small" />
            </TableCell>
            <TableCell className="borderElement">
              <TextField variant="outlined" size="small" />
            </TableCell>
            <TableCell className="borderElement">
              <TextField variant="outlined" size="small" />
            </TableCell>
            <TableCell className="borderElement">
              <TextField variant="outlined" size="small" />
            </TableCell>
            <TableCell>
              <TextField variant="outlined" size="small" />
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
    </TableContainer>
  );
}
