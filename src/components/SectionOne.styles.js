import { Grow, makeStyles } from '@material-ui/core';

export const useSectionOneStyles = makeStyles(() => ({
  sectionOneWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px',
    maxWidth: '700px',
    margin: 'auto',
    padding: '0 24px',
    maxHeight: '500px',
    '@media(max-width: 600px)': {
      flexDirection: 'column',
      paddingTop: '100px',
      width: 'auto',
      maxHeight: 'none',
    },
    '@media(min-width: 1000px)': {
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
  sectionOneHeader: {
    fontWeight: 'bold',
    fontSize: '3rem',
    lineHeight: '3.5rem',
    textAlign: 'left',
    marginBottom: '20px',
    '@media(max-width: 600px)': {
      textAlign: 'center',
    },
  },
  sectionOneSubheader: {
    fontSize: '1rem',
    textAlign: 'left',
    '@media(max-width: 600px)': {
      textAlign: 'center',
    },
  },
  sectionOneJoinButton: {
    background: 'black',
    color: 'white',
    borderRadius: '20px',
    width: '200px',
    height: '50px',
    margin: '20px 0 20px 0',
    fontSize: '1.125rem',
    '& > span': {
      textTransform: 'none',
    },
    '&:hover': {
      backgroundColor: '#6db0a7',
    },
    '@media(max-width: 600px)': {
      width: '75%',
      margin: '12px auto',
    },
  },
  bannerImageWrapper: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: 'right',
    height: '400px',
    padding: '16px 0',
    overflow: 'hidden',
    '@media(min-width: 601px)': {
      height: '275px',
    },
    '@media(min-width: 700px)': {
      height: '325px',
    },
    '@media(min-width: 1100px)': {
      height: '400px',
    },
  },
  bannerImage: {
    maxHeight: '100%', // key: let height shrink with aspect ratio
    maxWidth: '100%',
    width: 'auto',
    height: 'auto',
    objectFit: 'contain',
    borderRadius: '16px',
    '@media(max-width: 600px)': {
      width: '100%',
    },
  },
}));
