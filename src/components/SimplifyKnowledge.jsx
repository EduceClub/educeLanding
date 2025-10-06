import { Button, Typography } from '@mui/material';
import { useSimplifyKnowledgeStyles } from './SimplifyKnowledge.styles';
import ScreenGIF from '../assets/2023_12_20_Final1.gif';

const SimplifyKnowledge = () => {
  const classes = useSimplifyKnowledgeStyles();

  return (
    <div className={classes.sectionWrapper}>
      <div className={classes.bannerContentWrapper}>
        <Typography className={classes.header} variant="h1">
          Simplify your knowledge
        </Typography>
        <Typography className={classes.subheader}>
          Capture and build on your insights like never before.
        </Typography>
        <Button
          variant="contained"
          target="_blank"
          href="https://app.educe.club/"
          className={classes.joinButton}
        >
          Join the club
        </Button>
      </div>
      <div className={classes.bannerImageWrapper}>
        <img
          className={classes.bannerImage}
          src={ScreenGIF}
          alt="gif of using educe"
        />
      </div>
    </div>
  );
};

export default SimplifyKnowledge;
