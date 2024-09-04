import React, { useState } from 'react';
import Header from './Header';
import NavgiationPath from './NavigationPath';
import AssetTable from './AssetTable';
import PresentConditionTable from './PresentConditionTable';
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Paper,
  TextField,
  Typography,
  Checkbox,
  FormControlLabel,
  Divider,
  useTheme,
  useMediaQuery
} from '@material-ui/core';

const AssetDisposalRequest = () => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Container maxWidth={false} disableGutters>
        <Header />
        <Paper style={{ padding: isMobile ? '30px 20px' : '60px 140px' }}>
          <Typography variant="h4" gutterBottom>
            Asset Disposal Request
          </Typography>
          <NavgiationPath />

          {/* Section 1: Request Details */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField label="Request Ref No." fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Request Date" fullWidth variant="outlined" type="date" InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Proposer / Raiser Name" fullWidth variant="outlined" />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField label="Division" fullWidth variant="outlined" select>
                <MenuItem value="Division 1">Division 1</MenuItem>
                <MenuItem value="Division 2">Division 2</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="BC No" fullWidth variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Disposal Type" fullWidth variant="outlined" select>
                <MenuItem value="Type 1">Type 1</MenuItem>
                <MenuItem value="Type 2">Type 2</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Plant Code & Name" fullWidth variant="outlined" />
            </Grid>
          </Grid>

          <Divider style={{ margin: '20px 0' }} />

          {/* Section 2: Asset Details */}
          <Typography variant="h6" gutterBottom>
            Asset Details
          </Typography>
          <AssetTable />

          <Divider style={{ margin: '20px 0' }} />

          {/* Section 3: Two Text Boxes */}
          <Typography variant="h6" gutterBottom>
            Technical Specifications
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Detailed Tech Specification (Please attach details if required)"
                fullWidth
                variant="outlined"
                multiline
                rows={2}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Literature/Manuals/Drawings Available"
                fullWidth
                variant="outlined"
                multiline
                rows={2}
              />
            </Grid>
          </Grid>

          <Divider style={{ margin: '20px 0' }} />

          {/* Section 4: Present Condition of the Asset */}
          <Typography variant="h6" gutterBottom>
            Present Condition of the Asset
          </Typography>
          <PresentConditionTable />

          <Divider style={{ margin: '20px 0' }} />

          {/* Section 5: Checkboxes */}
          <Typography variant="h6" gutterBottom>
            Approval Requirements
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControlLabel control={<Checkbox />} label="GDC" />
              <FormControlLabel control={<Checkbox />} label="IDT" />
              <FormControlLabel control={<Checkbox />} label="Import" />
            </Grid>
          </Grid>

          <Divider style={{ margin: '20px 0' }} />

          {/* Section 6: Attachments */}
          <Typography variant="h6" gutterBottom>
            Attachments
          </Typography>
          <div>
            <input 
              type="file" 
              hidden 
              id="fileInput" 
              onChange={handleFileChange} 
            />
            <label htmlFor="fileInput">
              <Button variant="contained" component="span" color="primary">
                Select File
              </Button>
            </label>
            {fileName && <Typography variant="body1">Selected file: {fileName}</Typography>}
          </div>

          <Divider style={{ margin: '20px 0' }} />

          {/* Buttons */}
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button variant="contained" color="secondary">
              Reset
            </Button>
            <Button variant="contained" color="primary">
              Save as Draft
            </Button>
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default AssetDisposalRequest;