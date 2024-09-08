import { AppBar, Toolbar, Typography, Drawer, IconButton, List, ListItem, ListItemText } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
// import { useState } from 'react';


const Header = () => {
  // App Drawer if needed


  // const [drawerOpen, setDrawerOpen] = useState(false);

  // const toggleDrawer = (open) => (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }
  //   setDrawerOpen(open);
  // };
  

  return (
    <>
      <AppBar position="static" style={{ backgroundColor: '#3f51b5' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            // onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Asset Management System
          </Typography>
        </Toolbar>
      </AppBar>
      {/* <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button>
            <ListItemText primary="Approval Requirements" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Dispatch Reciept Form" />
          </ListItem>
        </List>
      </Drawer> */}
    </>
  );
};

export default Header;