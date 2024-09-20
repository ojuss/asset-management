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
  Typography,
} from "@material-ui/core";
import Header from "../layout-components/Header";
import NavigationPath from "../layout-components/NavigationPath";

const DOA = () => {
  const headers = ["Level", " Department", "Level Sequence", "Type", "User"];
  const cells = Array(5).fill(null);

  return (
    <Container maxWidth={false} disableGutters>
      <Header />
      <form class="form">
        <Typography variant="h4" gutterBottom>
          {" "}
          DOA{" "}
        </Typography>
        <NavigationPath path={"DOA"} />
        <TableContainer component={Paper} className="table-container">
          <Table aria-label="template and process flow table">
            <TableHead>
              <TableRow>
                {headers.map((header, index) => (
                  
                  <TableCell
                    key={index}
                    style={{
                      fontWeight: "bold",
                      color: "#000",
                      backgroundColor: "pink",
                    }}
                  >
                    {header === "User" ? (
                      <TextField variant="outlined" type="search" size="small" fullWidth label="User" />
                    ) : (
                      header
                    )}
                  </TableCell>

                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {cells.map((_, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TextField variant="standard" size="small" fullWidth />
                  </TableCell>
                  <TableCell>
                    <TextField variant="standard" size="small" fullWidth />
                  </TableCell>
                  <TableCell>
                    <TextField variant="standard" size="small" fullWidth />
                  </TableCell>
                  <TableCell>
                    <TextField variant="standard" size="small" fullWidth />
                  </TableCell>
                  <TableCell>
                    <TextField variant="standard" size="small" fullWidth />
                  </TableCell>
                </TableRow>
              ))}

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
      </form>
    </Container>
  );
};

export default DOA;
