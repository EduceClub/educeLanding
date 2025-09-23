import ConfusionGuy from '../assets/confusionGuy.svg';
import { Typography } from '@material-ui/core';
import { useSectionTwoStyles } from './SectionTwo.styles';

const SectionTwo = () => {
  const classes = useSectionTwoStyles();

  return (
    <div className={classes.sectionTwoBackdrop}>
      <div className={classes.sectionTwoWrapper}>
        <div className={classes.imageWrapper}>
          <img className={classes.sectionTwoImage} src={ConfusionGuy} />
        </div>
        <div className={classes.sectionTwoContentWrapper}>
          <div className={classes.sectionTwoHeaderTextWrapper}>
            <Typography className={classes.sectionTwoHeader}>
              Information overload is<span>&nbsp;real</span>
            </Typography>
          </div>
          <div className={classes.sectionTwoContentTextWrapper}>
            <Typography className={classes.sectionTwoText}>
              Do you have insights, quotes, and reminders on sticky notes, in
              physical and online notebooks, and 101 other places...and still
              forget where you put that one piece of information you need right
              now?
            </Typography>
            <Typography className={classes.sectionTwoText}>
              Wish you had a way to build upon the insights you captured in a
              meaningful way?
            </Typography>
            <Typography className={classes.sectionTwoText}>
              Educe is setup to be your central repository for you to store your
              short insights and then build upon them.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
