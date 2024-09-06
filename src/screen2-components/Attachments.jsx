import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Link,
  makeStyles,
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

const useStyles = makeStyles((theme) => ({
  approvalSection: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  approvalBox: {
    border: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(2),
    height: "100%",
  },
  approvalTitle: {
    fontWeight: "bold",
    marginBottom: theme.spacing(1),
  },
  approvalInfo: {
    display: "flex",
    alignItems: "flex-start",
  },
  approvalIcon: {
    marginRight: theme.spacing(1),
    marginTop: "2px",
  },
  approvalDate: {
    color: theme.palette.text.secondary,
    fontSize: "0.9rem",
  },
  approvalName: {
    fontWeight: "bold",
  },
  attachmentSection: {
    marginTop: theme.spacing(2),
  },
  attachmentLink: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(1),
    display: "inline-block",
  },
}));

const Attachments = () => {
  const classes = useStyles();

  return (
    <Box mt={2} mb={7}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.approvalBox}>
            <Typography className={classes.approvalTitle}>Final Payment Approval</Typography>
            <Box className={classes.approvalInfo}>
              <CheckCircleIcon
                color="primary"
                className={classes.approvalIcon}
              />
              <Box>
                <Typography className={classes.approvalDate}>
                  Sun,01-Jan-2000 00:00:00 PM
                </Typography>
                <Typography className={classes.approvalName}>
                  John Doe
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.approvalBox}>
            <Typography className={classes.approvalTitle}>
              Asset Capitalization Approval
            </Typography>
            <Box className={classes.approvalInfo}>
              <CheckCircleIcon
                color="primary"
                className={classes.approvalIcon}
              />
              <Box>
                <Typography className={classes.approvalDate}>
                  Sun,01-Jan-2000 00:00:00 PM
                </Typography>
                <Typography className={classes.approvalName}>
                  John Doe
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.approvalBox}>
            <Typography className={classes.approvalTitle}>PO Copy</Typography>
            <Typography>
              To be approved from portal first
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Attachments;
