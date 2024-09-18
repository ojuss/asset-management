import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Container,
} from "@material-ui/core";
import Header from "../layout-components/Header";

const DOA = () => {
  const rows = [
    {
      level: "L5",
      scm: "SCM",
      idt: "IDT",
      raiser: "Raiser",
      import: "IDT Import",
    },
    { level: "L4", scm: "SCM", raiser: "Verification" },
    { level: "L3", scm: "SCM", raiser: "Recommend" },
    { level: "L2", scm: "SQ/SCM", raiser: "Recommend" },
    { level: "L2", scm: "Purchase", raiser: "Recommend" },
    { level: "L1", scm: "CPO", raiser: "Approved" },
  ];

  return (
    <Container maxWidth={false} disableGutters>
      <Header />
      <TableContainer component={Paper} class="form">
        <Table aria-label="template and process flow table">
          <TableHead>
            <TableRow>
              <TableCell>Level</TableCell>
              <TableCell>SCM</TableCell>
              <TableCell>IDT</TableCell>
              <TableCell>Raiser</TableCell>
              <TableCell>Import</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.level}</TableCell>
                <TableCell>{row.scm}</TableCell>
                <TableCell>{row.idt}</TableCell>
                <TableCell>{row.raiser}</TableCell>
                <TableCell>{row.import}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={5}>L5</TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan={5}>Raiser</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sales Order No</TableCell>
              <TableCell colSpan={4}>
                <TextField variant="outlined" size="small" fullWidth />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>UTR No / Date</TableCell>
              <TableCell>
                <TextField variant="outlined" size="small" fullWidth />
              </TableCell>
              <TableCell colSpan={3}>
                <TextField
                  variant="outlined"
                  size="small"
                  fullWidth
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Attachment</TableCell>
              <TableCell colSpan={4}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: 8 }}
                >
                  Tax Invoice upload
                </Button>
                <Button variant="contained" color="primary">
                  E Way bill upload
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Final Submission</TableCell>
              <TableCell colSpan={4}>
                <Button variant="contained" color="primary">
                  Submit
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DOA;
