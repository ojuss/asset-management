// import React from "react";
// import {
//   Table,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TextField,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
// } from "@material-ui/core";

// export default function AssetTable() {
//   const headers = [
//     "Sr. No.",
//     "Asset Code / No.",
//     "Asset Description",
//     "Asset Type",
//     "PO No.",
//     "PO Line Item No.",
//     "PO Line Item Description",
//     "Asset Type Selection",
//     "Present Location",
//     "Name of Vendor",
//     "Vendor Code",
//     "Year of Purchase/Installation",
//     "Name of Manufacturer",
//     "Country of Origin",
//     "Manufacturer Serial Number",
//     "Model/ Project of Asset",
//     "Number of Loose Parts/Aggregates",
//     "Quantity",
//     "Weight of Asset(in kg)",
//     "Overall Size of Asset(H x W x L)",
//     "Performance expected to be achieved by the Asset",
//     "Performance achieved by the Asset",
//     "Major defects in the Asset",
//     "Condition of the Asset",
//     "Are any parts missing",
//     "Original asset value",
//     "Present written down value",
//   ];

//   return (
//     <TableContainer component={Paper} className="table-container">
//       <Table style={{ minWidth: 4100 }}>
//         <TableHead>
//           <TableRow>
//             {headers.map((header, index) => (
//               <TableCell key={index} className="borderElement">
//                 {header}
//               </TableCell>
//             ))}
//           </TableRow>
//           <TableRow>
//             <TableCell className="borderElement">
//               <TextField variant="outlined" size="small" />
//             </TableCell>
//             <TableCell className="borderElement">
//               <TextField variant="outlined" size="small" />
//             </TableCell>
//             <TableCell className="borderElement">
//               <TextField variant="outlined" size="small" />
//             </TableCell>
//             <TableCell className="borderElement">
//               <FormControl variant="outlined" size="small" fullWidth>
//                 <InputLabel></InputLabel>
//                 <Select defaultValue="">
//                   <MenuItem value="">
//                     <em>None</em>
//                   </MenuItem>
//                   <MenuItem value="Option1">Option 1</MenuItem>
//                   <MenuItem value="Option2">Option 2</MenuItem>
//                   <MenuItem value="Option3">Option 3</MenuItem>
//                 </Select>
//               </FormControl>
//             </TableCell>
//             <TableCell className="borderElement">
//               <TextField variant="outlined" size="small" />
//             </TableCell>
//             <TableCell className="borderElement">
//               <TextField variant="outlined" size="small" />
//             </TableCell>
//             <TableCell className="borderElement">
//               <TextField variant="outlined" size="small" />
//             </TableCell>
//             <TableCell className="borderElement">
//               <FormControl variant="outlined" size="small" fullWidth>
//                 <InputLabel></InputLabel>
//                 <Select defaultValue="">
//                   <MenuItem value="">
//                     <em>None</em>
//                   </MenuItem>
//                   <MenuItem value="Option1">Option 1</MenuItem>
//                   <MenuItem value="Option2">Option 2</MenuItem>
//                   <MenuItem value="Option3">Option 3</MenuItem>
//                 </Select>
//               </FormControl>
//             </TableCell>
//             <TableCell className="borderElement">
//               <TextField variant="outlined" size="small" />
//             </TableCell>
//             <TableCell className="borderElement">
//               <TextField variant="outlined" size="small" />
//             </TableCell>
//             <TableCell className="borderElement">
//               <TextField variant="outlined" size="small" />
//             </TableCell>
//             <TableCell className="borderElement">
//               <TextField variant="outlined" size="small" />
//             </TableCell>
//             <TableCell className="borderElement">
//               <TextField variant="outlined" size="small" />
//             </TableCell>
//             <TableCell className="borderElement">
//               <TextField variant="outlined" size="small" />
//             </TableCell>
//             <TableCell>
//               <TextField variant="outlined" size="small" />
//             </TableCell>
//           </TableRow>
//         </TableHead>
//       </Table>
//     </TableContainer>
//   );
// }


import React, { useState } from 'react';
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';

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

  const [rows, setRows] = useState([
    {
      assetDescription: '',
      assetType: '',
      poNo: '',
      poLineItemNo: '',
      poLineItemDescription: '',
      assetTypeSelection: '',
      presentLocation: '',
      nameOfVendor: '',
      vendorCode: '',
      yearOfPurchase: '',
      nameOfManufacturer: '',
      countryOfOrigin: '',
      manufacturerSerialNumber: '',
      modelProjectOfAsset: '',
      numberOfLooseParts: '',
      quantity: '',
      weightOfAsset: '',
      overallSizeOfAsset: '',
      performanceExpected: '',
      performanceAchieved: '',
      majorDefects: '',
      conditionOfAsset: '',
      partsMissing: '',
      originalAssetValue: '',
      presentWrittenDownValue: '',
    }
  ]);

  const handleAddRow = () => {
    setRows([...rows, {
      assetDescription: '',
      assetType: '',
      poNo: '',
      poLineItemNo: '',
      poLineItemDescription: '',
      assetTypeSelection: '',
      presentLocation: '',
      nameOfVendor: '',
      vendorCode: '',
      yearOfPurchase: '',
      nameOfManufacturer: '',
      countryOfOrigin: '',
      manufacturerSerialNumber: '',
      modelProjectOfAsset: '',
      numberOfLooseParts: '',
      quantity: '',
      weightOfAsset: '',
      overallSizeOfAsset: '',
      performanceExpected: '',
      performanceAchieved: '',
      majorDefects: '',
      conditionOfAsset: '',
      partsMissing: '',
      originalAssetValue: '',
      presentWrittenDownValue: '',
    }]);
  };

  const handleChange = (index, field, value) => {
    const newRows = [...rows];
    newRows[index][field] = value;
    setRows(newRows);
  };

  return (
    <>
      <TableContainer component={Paper} className="table-container" style={{marginBottom: 12}}>
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
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                <TableCell className="borderElement">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.assetDescription}
                    onChange={(e) => handleChange(rowIndex, 'assetDescription', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell className="borderElement">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.assetType}
                    onChange={(e) => handleChange(rowIndex, 'assetType', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell className="borderElement">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.poNo}
                    onChange={(e) => handleChange(rowIndex, 'poNo', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell className="borderElement">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.poLineItemNo}
                    onChange={(e) => handleChange(rowIndex, 'poLineItemNo', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell className="borderElement">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.poLineItemDescription}
                    onChange={(e) => handleChange(rowIndex, 'poLineItemDescription', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell className="borderElement">
                  <FormControl variant="outlined" size="small" fullWidth>
                    <InputLabel></InputLabel>
                    <Select
                      value={row.assetTypeSelection}
                      onChange={(e) => handleChange(rowIndex, 'assetTypeSelection', e.target.value)}
                    >
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
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.presentLocation}
                    onChange={(e) => handleChange(rowIndex, 'presentLocation', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell className="borderElement">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.nameOfVendor}
                    onChange={(e) => handleChange(rowIndex, 'nameOfVendor', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell className="borderElement">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.vendorCode}
                    onChange={(e) => handleChange(rowIndex, 'vendorCode', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell className="borderElement">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.yearOfPurchase}
                    onChange={(e) => handleChange(rowIndex, 'yearOfPurchase', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell className="borderElement">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.nameOfManufacturer}
                    onChange={(e) => handleChange(rowIndex, 'nameOfManufacturer', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell className="borderElement">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.countryOfOrigin}
                    onChange={(e) => handleChange(rowIndex, 'countryOfOrigin', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell className="borderElement">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.manufacturerSerialNumber}
                    onChange={(e) => handleChange(rowIndex, 'manufacturerSerialNumber', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell className="borderElement">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.modelProjectOfAsset}
                    onChange={(e) => handleChange(rowIndex, 'modelProjectOfAsset', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell className="borderElement">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.numberOfLooseParts}
                    onChange={(e) => handleChange(rowIndex, 'numberOfLooseParts', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell className="borderElement">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.quantity}
                    onChange={(e) => handleChange(rowIndex, 'quantity', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell className="borderElement">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.weightOfAsset}
                    onChange={(e) => handleChange(rowIndex, 'weightOfAsset', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell className="borderElement">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.overallSizeOfAsset}
                    onChange={(e) => handleChange(rowIndex, 'overallSizeOfAsset', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell className="borderElement">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.performanceExpected}
                    onChange={(e) => handleChange(rowIndex, 'performanceExpected', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell className="borderElement">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.performanceAchieved}
                    onChange={(e) => handleChange(rowIndex, 'performanceAchieved', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell className="borderElement">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.majorDefects}
                    onChange={(e) => handleChange(rowIndex, 'majorDefects', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell className="borderElement">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.conditionOfAsset}
                    onChange={(e) => handleChange(rowIndex, 'conditionOfAsset', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell className="borderElement">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.partsMissing}
                    onChange={(e) => handleChange(rowIndex, 'partsMissing', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell className="borderElement">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.originalAssetValue}
                    onChange={(e) => handleChange(rowIndex, 'originalAssetValue', e.target.value)}
                    fullWidth
                  />
                </TableCell>
                <TableCell className="borderElement">
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.presentWrittenDownValue}
                    onChange={(e) => handleChange(rowIndex, 'presentWrittenDownValue', e.target.value)}
                    fullWidth
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" onClick={handleAddRow}>
        Add Row
      </Button>
    </>
  );
};

export default AssetTable;