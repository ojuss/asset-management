import React from "react";
import Header from "../layout-components/Header";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import NavigationPath from "../layout-components/NavigationPath";

const AssetRecords = () => {
  const headers = [
    "ID/HID",
    "Auto Gen Number",
    "Raiser ID",
    "Raiser Name",
    "Raiser Dept",
    "Raiser Date",
    "Type",
    "Division",
    "Plant Code",
    "Status",
    "No of Assets",
    "Asset IDs",
  ];
  const rows = [
    {
      id: "1",
      autoGenNumber: "AGN1",
      raiserId: "RAISER1",
      raiserName: "Raiser 1",
      raiserDept: "Dept 1",
      raiserDate: "01/01/2021",
      type: "Type 1",
      division: "Division 1",
      plantCode: "Plant Code 1",
      status: "Status 1",
      noOfAssets: "1",
      assetIds: "Asset ID 1",
    },
    {
      id: "2",
      autoGenNumber: "AGN2",
      raiserId: "RAISER2",
      raiserName: "Raiser 2",
      raiserDept: "Dept 2",
      raiserDate: "02/02/2022",
      type: "Type 2",
      division: "Division 2",
      plantCode: "Plant Code 2",
      status: "Status 2",
      noOfAssets: "2",
      assetIds: "Asset ID 2",
    },
  ];

  const navigate = useNavigate();

  const handleRowClick = (row) => {
    navigate("/", { state: { assetDetails: row } });
  };

  return (
    <Container maxWidth={false} disableGutters>
      <Header />
      <form class="form">
        <Typography variant="h4" gutterBottom>
          {" "}
          Records{" "}
        </Typography>
        <NavigationPath path={"Records"} />
        <TableContainer component={Paper} className="table-container">
          <Table aria-label="asset records table">
            <TableHead>
              <TableRow>
                {headers.map((header, index) => (
                  <TableCell
                    key={index}
                    style={{
                      fontWeight: "bold",
                      backgroundColor: "pink",
                    }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  className="table-hover"
                  onClick={() => handleRowClick(row)}
                  style={{ cursor: "pointer" }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.autoGenNumber}</TableCell>
                  <TableCell>{row.raiserId}</TableCell>
                  <TableCell>{row.raiserName}</TableCell>
                  <TableCell>{row.raiserDept}</TableCell>
                  <TableCell>{row.raiserDate}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.division}</TableCell>
                  <TableCell>{row.plantCode}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.noOfAssets}</TableCell>
                  <TableCell>{row.assetIds}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </form>
    </Container>
  );
};

export default AssetRecords;
