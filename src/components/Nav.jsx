import { useState } from 'react';
import { Button } from '@material-ui/core';
import EduceLogo from '../assets/educeLogo.png';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useNavStyles } from './Nav.styles';

const Nav = () => {
  const classes = useNavStyles();

  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer((drawerOpen) => !drawerOpen);
  };

  const handleClick = (id) => {
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <div className={classes.navbarWrapper}>
      <div>
        <img
          className={classes.navbarImage}
          src={EduceLogo}
          alt="company logo"
        />
      </div>
      <div className={classes.navbarMenuWrapper}>
        <Button
          onClick={() => handleClick('#howItWorks')}
          className={classes.menuItem}
        >
          How it Works
        </Button>
        <Button href="mailto:tony@educe.club" className={classes.menuItem}>
          Contact
        </Button>
        <Button
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
              <ListItem
                className={classes.drawerItem}
                button
                onClick={() => handleClick('#howItWorks')}
              >
                <ListItemText primary={'How it Works'} />
              </ListItem>
              <Button
                className={classes.drawerItemContact}
                href="mailto:tony@educe.club"
              >
                Contact
              </Button>
              <Button
                className={classes.drawerItemLogin}
                target="_blank"
                href="https://app.educe.club/"
              >
                Login
              </Button>
            </List>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Nav;
