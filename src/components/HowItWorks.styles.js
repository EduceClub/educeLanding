import { makeStyles } from '@mui/styles';

export const useHowItWorksStyles = makeStyles((theme) => ({
  sectionWrapper: {
    padding: theme.spacing(1.5, 4),
    paddingTop: theme.spacing(8),
    maxWidth: '700px',
    margin: 'auto',

    [theme.breakpoints.down('sm')]: {
      margin: '0px',
      borderRadius: '0px',
      padding: theme.spacing(1.5, 4),
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '75%',
    },
  },
  header: {
    fontWeight: 'bold',
    fontSize: '2.5rem',
    lineHeight: '2.5rem',
    textAlign: 'left',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  subheader: {
    textAlign: 'left',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  tabAreaWrapper: {
    minHeight: '500px',
    display: 'flex',
    flexDirection: 'column',
  },
  tabListWrapper: {
    '& button': {
      textTransform: 'none',
    },
  },
  tabButton: {
    color: theme.palette.primary.main,
    transition: 'color 0.3s ease',
    fontSize: '0.9rem',
    '&:hover': {
      color: theme.palette.accent.main,
    },
  },
  tabPanel: {
    margin: 'auto',
  },
  contentWrapper: {
    padding: theme.spacing(3, 0),
    maxWidth: '100%',
    display: 'flex',
    gap: theme.spacing(2),
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: theme.spacing(3),
    },
    [theme.breakpoints.up('md')]: {
      gap: theme.spacing(2.5),
    },
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '30%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
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
  gif: {
    borderRadius: '16px',
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '400px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: 'auto',
      display: 'block',
    },
  },
}));
