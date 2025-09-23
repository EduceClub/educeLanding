import { Typography } from '@material-ui/core';
import { useHowItWorksStyles } from './HowItWorks.styles';

import { useState } from 'react';
import Buildon from '../assets/Buildon2.gif';
import Recall from '../assets/Recall.gif';
import Store2 from '../assets/Store2.gif';
import Share from '../assets/Share.gif';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const HowItWorks = () => {
  const classes = useHowItWorksStyles();

  const [activeStep, setActiveStep] = useState(0);
  const [value, setValue] = useState(0);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <>
        <div id="howItWorks"></div>
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              <div className={classes.tabsInnerContentWrapper}>{children}</div>
            </Box>
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

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.howToContentWrapper}>
      <div className={classes.tabsWrapper}>
        <Box>
          <Box>
            <Tabs
              indicatorColor="secondary"
              classes={{ root: classes.tabLabel }}
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                classes={{ root: classes.tabLabelSelected }}
                label="Store"
                {...a11yProps(0)}
              />
              <Tab
                classes={{ root: classes.tabLabelSelected }}
                label="Build"
                {...a11yProps(1)}
              />
              <Tab
                classes={{ root: classes.tabLabelSelected }}
                label="Recall"
                {...a11yProps(2)}
              />
              <Tab
                classes={{ root: classes.tabLabelSelected }}
                label="Share"
                {...a11yProps(3)}
              />
            </Tabs>
          </Box>

          <div className={classes.tabsContentWrapper}>
            <TabPanel
              className={classes.tabPanelElement}
              value={value}
              index={0}
            >
              <Typography className={classes.tabsDescription}>
                Store short insights with a title and tag which allow you to
                recall your information easily.
              </Typography>
              <img className={classes.gif} src={Store2} />
            </TabPanel>
          </div>

          <div className={classes.tabsContentWrapper}>
            <TabPanel
              className={classes.tabPanelElement}
              value={value}
              index={1}
            >
              <Typography className={classes.tabsDescription}>
                Build upon your takeaways by adding columns and rows. This
                ability allows you to add additional thoughts or context to your
                information.
              </Typography>

              <img className={classes.gif} src={Buildon} />
            </TabPanel>
          </div>

          <div className={classes.tabsContentWrapper}>
            <TabPanel
              className={classes.tabPanelElement}
              value={value}
              index={2}
            >
              <Typography className={classes.tabsDescription}>
                Category tags allow you to see all the insights or information
                you store to a topic in one view. This helps you organize your
                information over time.
              </Typography>
              <img className={classes.gif} src={Recall} />
            </TabPanel>
          </div>
          <div className={classes.tabsContentWrapper}>
            <TabPanel
              className={classes.tabPanelElement}
              value={value}
              index={3}
            >
              <Typography className={classes.tabsDescription}>
                Share cards with others to help build up on your insights.
                Whether you have a work topic to share with colleagues and
                industry experts or you have a child's medical information you
                want to share with your partner.
                <br />
                <br />
                Shared cards and categories allow you to work with others to
                build upon your information.
              </Typography>

              <img className={classes.gif} src={Share} />
            </TabPanel>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default HowItWorks;
