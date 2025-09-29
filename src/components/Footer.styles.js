import { makeStyles } from '@mui/styles';

export const useFooterStyles = makeStyles((theme) => ({
  footerWrapper: {
    backgroundColor: theme.palette.primary.main, // Black from theme
    height: '75px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  educeCopyright: {
    color: theme.palette.secondary.main, // White from theme
    textAlign: 'left',
    marginLeft: theme.spacing(2),
  },
}));
