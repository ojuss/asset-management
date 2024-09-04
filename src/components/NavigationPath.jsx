import React from 'react';
import { Breadcrumbs, Link } from '@material-ui/core';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

function NavigationPath() {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      style={{ backgroundColor: 'white', paddingBottom: '30px' }}
      separator={<DoubleArrowIcon fontSize="small" />}
    >
      <Link color="inherit" underline="none">
        Home
      </Link>
      <Link color="inherit" href="" underline="none">
        Asset Disposal Request
      </Link>
    </Breadcrumbs>
  );
}

export default NavigationPath;
