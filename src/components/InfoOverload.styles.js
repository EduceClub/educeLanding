import { makeStyles } from '@mui/styles';

export const useInfoOverloadStyles = makeStyles((theme) => ({
  backdrop: {
    background: theme.palette.primary.main,
  },
  sectionWrapper: {
    display: 'flex',
    gap: theme.spacing(4),
    alignItems: 'center',
    margin: 'auto',
    padding: '0 24px',
    '@media(max-width: 600px)': {
      flexDirection: 'column',
      height: 'auto',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '75%',
      gap: theme.spacing(6),
    },
  },
  imageWrapper: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '50%',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '0px',
    },
  },
  lefthandImage: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '75%',
      paddingTop: theme.spacing(3),
      margin: 'auto',
    },
  },
  contentWrapper: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '50%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    minWidth: '40%',
    color: 'white',
    padding: theme.spacing(8, 0),
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
    },
  },
  headerTextWrapper: {
    display: 'flex',
    marginBottom: theme.spacing(2),
  },
  header: {
    fontWeight: 'bold',
    fontSize: '3rem',
    lineHeight: '3.5rem',
    textAlign: 'left',
    '& > span': {
      color: theme.palette.accent.secondary,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
      lineHeight: '2.5rem',
      width: '100%',
      textAlign: 'center',
    },
  },
  contentTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    fontSize: '1rem',
    textAlign: 'left',
    margin: theme.spacing(1.25, 0),
  },
}));
