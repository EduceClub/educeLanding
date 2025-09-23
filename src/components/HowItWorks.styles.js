import { makeStyles } from '@material-ui/core';

export const useHowItWorksStyles = makeStyles((theme) => ({
  howToContentWrapper: {
    padding: '12px 36px',

    '@media(max-width: 600px)': {
      margin: '0px',
      borderRadius: '0px',
      padding: '12px 36px',
    },
  },
  tabWrapper: {
    '& button': {
      textTransform: 'none',
    },
  },
  tabButton: {
    color: 'black !important',
    '&:hover': {
      backgroundColor: '#6db0a7',
    },
  },
  tabPanel: {
    '& > div': {
      padding: '24px 0px',
      width: '100%',
    },
  },
  contentWrapper: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    margin: 'auto',
    '@media(max-width: 600px)': {
      flexDirection: 'column',
      gap: '24px',
    },
    '@media(min-width: 1000px)': {
      maxWidth: '75%',
      gap: '2rem',
    },
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '40%',
    flexGrow: 1,
    flexShrink: 1,
    '@media(min-width: 800px)': {
      flexBasis: '30%',
    },
  },
  title: {
    fontWeight: 'bold',
    lineHeight: '3rem',
  },
  description: {
    textAlign: 'left',
    '@media(max-width: 600px)': {
      margin: '0px',
    },
  },
  imageWrapper: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '60%',
    '@media(max-width: 600px)': {
      marginLeft: '0px',
    },
    '@media(min-width: 800px)': {
      flexBasis: '70%',
    },
  },
  gif: {
    borderRadius: '10px',
    width: '100%',
    '@media(max-width: 600px)': {
      width: '75%',
      margin: 'auto',
    },
  },
}));
