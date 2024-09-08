import Header from "../layout-components/Header";
import NavigationPath from "../layout-components/NavigationPath";
import {
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  useTheme,
  useMediaQuery,
  Divider,
} from "@material-ui/core";
import VendorDetails from "./VendorDetails";
import GoodsSection from "./GoodsSection";
import Approvals from "./Approvals";
import Attachments from "./Attachments";

const DispatchRecieptForm = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));


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
        
        {/* Section 4: Attachments */}

        <Divider class="divider"/>
        <Typography
          variant="h6"
          style={{ marginTop: "20px", marginBottom: "10px" }}
        >
          Attachments
        </Typography>
        <Attachments />
        <Typography>
          Note: To view status of requests & action through pFirst portal, please click here MiNT.
        </Typography>
      </Paper>
    </Container>
  );
};

export default DispatchRecieptForm;
