import { Button, Typography } from '@mui/material';
import { useSectionOneStyles } from './SectionOne.styles';
import ScreenGIF from '../assets/2023_12_20_Final1.gif';

const SectionOne = () => {
  const classes = useSectionOneStyles();

  return (
    <div className={classes.sectionOneWrapper}>
      <div className={classes.bannerContentWrapper}>
        <Typography className={classes.sectionOneHeader}>
          Simplify your knowledge
        </Typography>
        <Typography className={classes.sectionOneSubheader}>
          Capture and build on your insights like never before.
        </Typography>
        <Button
          variant="contained"
          target="_blank"
          href="https://app.educe.club/"
          className={classes.sectionOneJoinButton}
        >
          Join the club
        </Button>
      </div>
      <div className={classes.bannerImageWrapper}>
        <img className={classes.bannerImage} src={ScreenGIF} />
      </div>
    </div>
  );
};

export default SectionOne;
