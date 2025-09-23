import { makeStyles } from '@material-ui/core';

export const useHowItWorksStyles = makeStyles((theme) => ({
  tabsWrapper: {
    display: 'flex',
    padding: '30px',
    height: '600px',
    '@media(max-width: 600px)': {
      padding: '0px',
    },
  },
  howToContentWrapper: {
    display: 'flex',
    background: '#ffffff',
    '@media(max-width: 600px)': {
      width: '100%',
      margin: '0px',
      borderRadius: '0px',
    },
  },
  gif: {
    width: '60%',
    borderRadius: '10px',
    maxHeight: '500px',
    '@media(max-width: 600px)': {
      width: '100%',
    },
  },
  tabsContentWrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  tabPanelElement: {
    '& > div': {
      padding: '20px 0px',
    },
  },
  tabsDescription: {
    textAlign: 'left',
    width: '100%',
    margin: '10px 24px 0px 24px',
    '@media(max-width: 600px)': {
      margin: '0px',
      marginBottom: '40px',
    },
  },
  tabLabel: {
    '& button': {
      textTransform: 'none',
    },
  },
  tabLabelSelected: {
    color: 'black !important',
    '&:hover': {
      backgroundColor: '#6db0a7',
    },
  },
  tabLabelIndicator: {
    backgroundColor: 'black',
  },
  tabsInnerContentWrapper: {
    display: 'flex',
    '@media(max-width: 600px)': {
      flexDirection: 'column',
      padding: '10px',
    },
  },
}));
