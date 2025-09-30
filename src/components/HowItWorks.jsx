import { useHowItWorksStyles } from './HowItWorks.styles';
import { useState } from 'react';
import { Typography, Box, Tabs, Tab } from '@mui/material';
import Buildon from '../assets/Buildon2.gif';
import Recall from '../assets/Recall.gif';
import Store2 from '../assets/Store2.gif';
import Share from '../assets/Share.gif';

const HowItWorks = () => {
  const classes = useHowItWorksStyles();

  const [tabIndex, setTabIndex] = useState(0);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <>
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          className={classes.tabPanel}
          {...other}
        >
          {value === index && (
            <Box className={classes.contentWrapper}>{children}</Box>
          )}
        </div>
      </>
    );
  }

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleTabChange = (_, newTabIndex) => {
    setTabIndex(newTabIndex);
  };

  return (
    <div id="howItWorks" className={classes.howToContentWrapper}>
      <Typography variant="h1" className={classes.header}>
        How it Works
      </Typography>
      <Typography className={classes.subheader} variant="body1">
        Build and access your insight repository with ease.
      </Typography>
      <Box className={classes.tabAreaWrapper}>
        <Tabs
          centered
          classes={{ root: classes.tabListWrapper }}
          value={tabIndex}
          onChange={handleTabChange}
          aria-label="how it works tabs"
        >
          <Tab
            classes={{ root: classes.tabButton }}
            label="Store"
            {...a11yProps(0)}
          />
          <Tab
            classes={{ root: classes.tabButton }}
            label="Build"
            {...a11yProps(1)}
          />
          <Tab
            classes={{ root: classes.tabButton }}
            label="Recall"
            {...a11yProps(2)}
          />
          <Tab
            classes={{ root: classes.tabButton }}
            label="Share"
            {...a11yProps(3)}
          />
        </Tabs>

        <TabPanel value={tabIndex} index={0}>
          <Box className={classes.textWrapper}>
            <Typography variant="h5" className={classes.title}>
              Store
            </Typography>
            <Typography className={classes.description}>
              Store short insights with a title and tag which allow you to
              recall your information easily.
            </Typography>
          </Box>
          <Box className={classes.imageWrapper}>
            <img
              className={classes.gif}
              src={Store2}
              alt="gif of adding a card"
            />
          </Box>
        </TabPanel>

        <TabPanel value={tabIndex} index={1}>
          <Box className={classes.textWrapper}>
            <Typography variant="h5" className={classes.title}>
              Build
            </Typography>
            <Typography className={classes.description}>
              Build upon your takeaways by adding columns and rows. This ability
              allows you to add additional thoughts or context to your
              information.
            </Typography>
          </Box>
          <Box className={classes.imageWrapper}>
            <img
              className={classes.gif}
              src={Buildon}
              alt="gif of card content interaction"
            />
          </Box>
        </TabPanel>

        <TabPanel value={tabIndex} index={2}>
          <Box className={classes.textWrapper}>
            <Typography variant="h5" className={classes.title}>
              Recall
            </Typography>
            <Typography className={classes.description}>
              Category tags allow you to see all the insights or information you
              store to a topic in one view. This helps you organize your
              information over time.
            </Typography>
          </Box>
          <Box className={classes.imageWrapper}>
            <img
              className={classes.gif}
              src={Recall}
              alt="gif of category tags functionality"
            />
          </Box>
        </TabPanel>

        <TabPanel value={tabIndex} index={3}>
          <Box className={classes.textWrapper}>
            <Typography variant="h5" className={classes.title}>
              Share
            </Typography>
            <Typography
              className={classes.description}
              sx={{ marginBottom: 2 }}
            >
              Share cards with others to help build up on your insights, whether
              it be for work, family, or any topic important to you.
            </Typography>
            <Typography className={classes.description}>
              Shared cards and categories allow you to work with others to build
              upon your information.
            </Typography>
          </Box>
          <Box className={classes.imageWrapper}>
            <img
              className={classes.gif}
              src={Share}
              alt="gif of share functionality"
            />
          </Box>
        </TabPanel>
      </Box>
    </div>
  );
};

export default HowItWorks;
