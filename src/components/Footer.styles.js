import { makeStyles } from '@material-ui/core';

export const useFooterStyles = makeStyles(() => ({
  footerWrapper: {
    backgroundColor: 'black',
    height: '75px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  educeCopyright: {
    color: 'white',
    textAlign: 'left',
    marginLeft: '15px',
  },
}));
