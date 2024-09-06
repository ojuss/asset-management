import React, { useState } from "react";
import Header from "../layout-components/Header";
import NavigationPath from "../layout-components/NavigationPath";
import {
  Box,
  Button,
  Container,
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
  useTheme,
  useMediaQuery,
  Divider,
} from "@material-ui/core";
import VendorDetails from "./VendorDetails";
import GoodsSection from "./GoodsSection";
import Approvals from "./Approvals";

const DespatchReceiptForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <Container maxWidth={false} disableGutters>
      <Header />
      <Paper style={{ padding: isMobile ? "30px 20px" : "60px 140px" }}>
        <Typography variant="h4" gutterBottom>
          Dispatch / Reciept Advice / Transport Requisition
        </Typography>
        <NavigationPath path={"Dispatch / Reciept Advice"} />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Ref No:"
              fullWidth
              variant="outlined"
              value="Auto-fetch"
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="From:"
              fullWidth
              variant="outlined"
              disabled
              value={"AQ"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="To:"
              fullWidth
              variant="outlined"
              disabled
              value={"Dispatch Section"}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              label="Request Date"
              fullWidth
              variant="outlined"
              type="date"
              InputLabelProps={{ shrink: true }}
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name & Code of the Proj./Divn. For whom the job is being carried out:"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Our Correspondence reference with party (Pur. Ord./Letter ref.) :-"
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Divider class="divider" />
        {/* Section 2: Vendor Details */}
        <VendorDetails />

        <Divider class="divider" />
        {/* Section 3: Arrange/ Recieve Goods*/}
        <GoodsSection />

        <Divider class="divider" />
        {/* Approvals */}

        <Typography
          variant="h6"
          style={{ marginTop: "20px", marginBottom: "10px" }}
        >
          Approvals
        </Typography>
        <Approvals />
        
        <Divider class="divider"/>
        <Typography
          variant="h6"
          style={{ marginTop: "20px", marginBottom: "10px" }}
        >
          Attachments
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          value="All earlier documents by defaults"
          disabled
        />

        <Typography
          variant="h6"
          style={{ marginTop: "20px", marginBottom: "10px" }}
        >
          Approved By
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              variant="outlined"
              label="AQ Raiser"
              value="Signature will be autofetched by earlier approval"
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              variant="outlined"
              label="AQ Group Lead"
              value="Signature will be autofetched by earlier approval"
              disabled
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth variant="outlined" label="IDT" disabled />
          </Grid>
        </Grid>

        <Box mt={2}>
          <input
            accept=".csv,.xlsx,.xls"
            style={{ display: "none" }}
            id="raised-button-file"
            multiple
            type="file"
            onChange={handleFileChange}
          />
          <label htmlFor="raised-button-file">
            <Button variant="contained" component="span">
              Upload File
            </Button>
          </label>
          {file && (
            <Typography variant="body2">File uploaded: {file.name}</Typography>
          )}
        </Box>

        <Typography variant="body2" style={{ marginTop: "10px" }}>
          Please download & fill details in attached HSN code & Assessable Value
          Format template only & upload in system
        </Typography>

        <Box display="flex" justifyContent="space-between" mt={2}>
          <Button variant="contained" color="primary">
            Download HSN code & Assessable Value Format template
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default DespatchReceiptForm;
