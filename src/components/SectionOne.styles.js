import { makeStyles } from '@material-ui/core';

export const useSectionOneStyles = makeStyles(() => ({
  sectionOneWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    background: '#ffffff',
    minHeight: '500px',
    marginTop: '40px',
    padding: '0px 14% 0 14%',
    maxWidth: '93%',
    '@media(max-width: 600px)': {
      flexDirection: 'column',
      paddingTop: '100px',
      width: 'auto',
    },
  },
  sectionOneHeader: {
    fontWeight: 'bold',
    fontSize: '3rem',
    textAlign: 'left',
    marginBottom: '20px',
    '@media(max-width: 600px)': {
      fontSize: '2rem',
    },
  },
  sectionOneSubheader: {
    fontSize: '1rem',
    textAlign: 'left',
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
      width: '100%',
    },
  },
  bannerImage: {
    width: '53%',
    borderRadius: '16px',
    '@media(max-width: 600px)': {
      width: '100%',
    },
  },
  bannerContentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    minWidth: '32vw',
  },
  bannerImageWrapper: {
    display: 'flex',
    '@media(max-width: 600px)': {
      justifyContent: 'center',
      margin: '50px 0',
    },
  },
}));
