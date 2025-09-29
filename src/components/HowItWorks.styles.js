import { makeStyles } from '@mui/styles';

export const useHowItWorksStyles = makeStyles((theme) => ({
  howToContentWrapper: {
    padding: theme.spacing(1.5, 4),
    minHeight: '500px',
    display: 'flex',
    flexDirection: 'column',

    [theme.breakpoints.down('sm')]: {
      margin: '0px',
      borderRadius: '0px',
      padding: theme.spacing(1.5, 4),
    },
  },
  tabWrapper: {
    '& button': {
      textTransform: 'none',
    },
  },
  tabButton: {
    color: theme.palette.primary.main,
    transition: 'color 0.3s ease',
    fontSize: '1rem',
    '&:hover': {
      color: theme.palette.accent.main,
    },
  },
  tabPanel: {
    margin: 'auto',
    '& > div': {
      padding: theme.spacing(3, 0),
      width: '100%',
    },
  },
  contentWrapper: {
    display: 'flex',
    gap: theme.spacing(2),
    alignItems: 'center',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: theme.spacing(3),
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '75%',
      gap: theme.spacing(2.5),
    },
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '40%',
    flexGrow: 1,
    flexShrink: 1,
    [theme.breakpoints.up('md')]: {
      flexBasis: '30%',
    },
  },
  title: {
    fontWeight: 'bold',
    lineHeight: '3rem',
  },
  description: {
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      margin: '0px',
    },
  },
  imageWrapper: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '60%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0px',
    },
    [theme.breakpoints.up('md')]: {
      flexBasis: '70%',
    },
  },
  gif: {
    borderRadius: '10px',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '75%',
      margin: 'auto',
    },
  },
}));
