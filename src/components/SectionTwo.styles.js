import { makeStyles } from '@material-ui/core';

export const useSectionTwoStyles = makeStyles(() => ({
  sectionTwoWrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 14% 0 14%',
    margin: 'auto',
    background: 'black',
    height: '500px',
    '@media(max-width: 600px)': {
      flexDirection: 'column',
      height: 'auto',
    },
  },
  sectionTwoHeader: {
    fontWeight: 'bold',
    fontSize: '3rem',
    textAlign: 'left',
    '& > span': {
      color: '#AAF0C1',
    },
    '@media(max-width: 600px)': {
      fontSize: '2rem',
    },
  },
  sectionTwoText: {
    fontSize: '1rem',
    textAlign: 'left',
    margin: '10px 0 10px 0',
  },
  sectionTwoContentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    minWidth: '40%',
    color: 'white',
    maxHeight: '500px',
  },
  sectionTwoImage: {
    borderRadius: '35px',
    width: '53vw',
    '@media(max-width: 600px)': {
      minWidth: '80vw',
    },
  },
  imageWrapper: {
    display: 'flex',
    marginLeft: '-150px',
    '@media(max-width: 600px)': {
      marginLeft: '0px',
    },
  },
  sectionTwoHeaderTextWrapper: {
    display: 'flex',
    margin: '0px 0 20px 0',
  },
  sectionTwoContentTextWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
}));
