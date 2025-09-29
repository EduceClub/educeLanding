import { makeStyles } from '@mui/styles';

export const useNavStyles = makeStyles((theme) => ({
  navbarWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    background: theme.palette.secondary.main,
    height: '75px',
    position: 'sticky',
    top: 0,
    width: '100%',
    zIndex: 10,
  },
  navbarImage: {
    objectFit: 'contain',
    width: '200px',
    margin: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      width: '175px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '150px',
    },
  },
  navbarMenuWrapper: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  menuItem: {
    margin: 'auto 10px !important',
    borderRadius: '30px',
    textTransform: 'none',
    fontSize: '1rem',
  },
  loginButton: {
    borderRadius: '30px',
    height: '35px',
    margin: 'auto',
    marginLeft: theme.spacing(1.5),
    marginRight: theme.spacing(4),
    textTransform: 'none',
    fontSize: '1rem',
    '&:hover': {
      backgroundColor: theme.palette.accent.main,
    },
  },
  navBarHamburgerDrawerWrapper: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
    },
  },
  hamburgerIcon: {
    margin: theme.spacing(2),
    fontSize: '2.5rem',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerItem: {
    '&:hover': {
      backgroundColor: theme.palette.accent.main,
      color: theme.palette.primary.main,
    },
  },
  drawerItemLogin: {
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.accent.main,
    },
  },
  list: {
    width: '250px',
  },
}));
