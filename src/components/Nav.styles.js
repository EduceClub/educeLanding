import { makeStyles } from '@material-ui/core';

export const useNavStyles = makeStyles(() => ({
  navbarWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    background: '#ffffff',
    height: '75px',
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 10,
  },
  navbarImage: {
    width: '200px',
    margin: '10px',
  },
  navbarMenuWrapper: {
    display: 'flex',
    '@media(max-width: 600px)': {
      display: 'none',
    },
  },
  menuItem: {
    margin: 'auto 10px !important',
    borderRadius: '30px',
    '& span': {
      textTransform: 'none',
      fontSize: '1rem',
    },
  },
  loginButton: {
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '30px',
    height: '35px',
    margin: 'auto',
    marginLeft: '16px',
    marginRight: '32px',
    '&:hover': {
      backgroundColor: '#6db0a7',
    },
    '& span': {
      textTransform: 'none',
      fontSize: '1rem;',
    },
  },
  loginButtonMobile: {
    '& span': {
      color: 'white',
    },
  },
  navBarHamburgerDrawerWrapper: {
    display: 'none',
    '@media(max-width: 600px)': {
      display: 'flex',
    },
  },
  hamburgerIcon: {
    margin: '20px',
    fontSize: '2.5rem',
    '@media(min-width: 601px)': {
      display: 'none',
    },
  },
  drawerItem: {
    '&:hover': {
      backgroundColor: '#6db0a7',
      color: 'black',
    },
    '&:selected:hover': {
      backgroundImage: '#6db0a7',
      color: 'black',
    },
  },
  drawerItemLogin: {
    display: 'flex',
    backgroundColor: 'black',
    padding: '8px 16px',
    width: '100%',
    borderRadius: '0px',
    '& span': {
      textTransform: 'none',
      fontSize: '1rem',
      color: '#ffffff',
      justifyContent: 'flex-start',
    },
    '&:hover': {
      backgroundColor: '#6db0a7',
      color: 'black',
    },
    '&:selected:hover': {
      backgroundImage: '#6db0a7',
      color: 'black',
    },
  },
  drawerItemContact: {
    fontSize: '1rem',
    padding: '8px 16px',
    '& span': {
      textTransform: 'none',
    },
    '&:hover': {
      backgroundColor: '#6db0a7',
      color: 'black',
    },
    '&:selected:hover': {
      backgroundImage: '#6db0a7',
      color: 'black',
    },
  },
  list: {
    width: '250px',
  },
}));
