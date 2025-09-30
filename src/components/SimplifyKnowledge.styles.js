import { makeStyles } from '@mui/styles';

export const useSimplifyKnowledgeStyles = makeStyles((theme) => ({
  sectionWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing(2),
    maxWidth: '700px',
    margin: 'auto',
    padding: theme.spacing(3),
    maxHeight: '500px',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      paddingTop: theme.spacing(12),
      width: 'auto',
      maxHeight: 'none',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '75%',
    },
  },
  bannerContentWrapper: {
    display: 'flex',
    flexBasis: '55%',
    flexGrow: 0,
    flexShrink: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  header: {
    fontWeight: 'bold',
    fontSize: '3rem',
    lineHeight: '3.5rem',
    textAlign: 'left',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  subheader: {
    fontSize: '1rem',
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  joinButton: {
    borderRadius: '20px',
    width: '200px',
    height: '50px',
    margin: theme.spacing(2.5, 0),
    fontSize: '1.125rem',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.palette.accent.main,
    },
    [theme.breakpoints.down('sm')]: {
      width: '75%',
      margin: theme.spacing(1.5, 'auto'),
    },
  },
  bannerImageWrapper: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: 'center',
    padding: theme.spacing(2, 0),
    overflow: 'hidden',
  },
  bannerImage: {
    width: 'auto',
    height: 'auto',
    maxHeight: '400px',
    maxWidth: '40vw',
    objectFit: 'contain',
    borderRadius: '16px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: '100%',
    },
  },
}));
