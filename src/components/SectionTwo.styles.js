import { makeStyles } from '@material-ui/core';

export const useSectionTwoStyles = makeStyles(() => ({
  sectionTwoBackdrop: {
    background: 'black',
  },
  sectionTwoWrapper: {
    display: 'flex',
    gap: '4rem',
    alignItems: 'center',
    margin: 'auto',
    padding: '0 24px',
    background: 'black',
    '@media(max-width: 600px)': {
      flexDirection: 'column',
      height: 'auto',
    },
    '@media(min-width: 1000px)': {
      maxWidth: '75%',
      gap: '6rem',
    },
  },
  imageWrapper: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '50%',
    '@media(max-width: 600px)': {
      marginLeft: '0px',
    },
  },
  sectionTwoImage: {
    width: '100%',
    '@media(max-width: 600px)': {
      width: '75%',
      paddingTop: '24px',
      margin: 'auto',
    },
  },
  sectionTwoContentWrapper: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '50%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    minWidth: '40%',
    color: 'white',
    padding: '48px 0',
    '@media(max-width: 600px)': {
      paddingTop: 0,
    },
  },
  sectionTwoHeaderTextWrapper: {
    display: 'flex',
    margin: '0px 0 20px 0',
  },
  sectionTwoHeader: {
    fontWeight: 'bold',
    fontSize: '3rem',
    lineHeight: '3.5rem',
    textAlign: 'left',
    '& > span': {
      color: '#AAF0C1',
    },
    '@media(max-width: 600px)': {
      fontSize: '2rem',
      lineHeight: '2.5rem',
      width: '100%',
      textAlign: 'center',
    },
  },
  sectionTwoContentTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  sectionTwoText: {
    fontSize: '1rem',
    textAlign: 'left',
    margin: '10px 0 10px 0',
  },
}));
