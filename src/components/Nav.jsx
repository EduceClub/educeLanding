import { useState } from 'react';
import { Menu as MenuIcon } from '@mui/icons-material';
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Drawer,
  ListItemButton,
} from '@mui/material';
import { useNavStyles } from './Nav.styles';
import EduceLogo from '../assets/educeLogo.png';

const Nav = () => {
  const classes = useNavStyles();

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer((drawerOpen) => !drawerOpen);
  };

  const handleClick = (id) => {
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className={classes.navbarWrapper}>
      <img className={classes.navbarImage} src={EduceLogo} alt="company logo" />
      <div className={classes.navbarMenuWrapper}>
        <Button
          variant="text"
          onClick={() => handleClick('#howItWorks')}
          className={classes.menuItem}
        >
          How it Works
        </Button>
        <Button
          variant="text"
          href="mailto:tony@educe.club"
          className={classes.menuItem}
        >
          Contact
        </Button>
        <Button
          variant="contained"
          target="_blank"
          href="https://app.educe.club/"
          className={classes.loginButton}
        >
          Login
        </Button>
      </div>
      <div className={classes.navBarHamburgerDrawerWrapper}>
        <MenuIcon className={classes.hamburgerIcon} onClick={toggleDrawer} />
        <Drawer
          open={openDrawer}
          onClose={toggleDrawer}
          anchor="right"
          className={classes.drawerRoot}
        >
          <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
          >
            <List>
              <ListItemButton
                className={classes.drawerItem}
                onClick={() => handleClick('#howItWorks')}
              >
                <ListItemText primary={'How it Works'} />
              </ListItemButton>
              <ListItemButton
                className={classes.drawerItem}
                href="mailto:tony@educe.club"
              >
                <ListItemText primary={'Contact'} />
              </ListItemButton>
              <ListItemButton
                className={classes.drawerItemLogin}
                target="_blank"
                href="https://app.educe.club/"
              >
                <ListItemText primary={'Login'} />
              </ListItemButton>
            </List>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Nav;
