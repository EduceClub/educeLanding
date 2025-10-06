import ConfusionGuy from '../assets/confusionGuy.svg';
import { Typography } from '@mui/material';
import { useInfoOverloadStyles } from './InfoOverload.styles';

const InfoOverload = () => {
  const classes = useInfoOverloadStyles();

  return (
    <div className={classes.backdrop}>
      <div className={classes.sectionWrapper}>
        <div className={classes.imageWrapper}>
          <img
            className={classes.lefthandImage}
            src={ConfusionGuy}
            alt="information overload graphic"
          />
        </div>
        <div className={classes.contentWrapper}>
          <div className={classes.headerTextWrapper}>
            <Typography variant="h1" className={classes.header}>
              Information overload is<span>&nbsp;real</span>
            </Typography>
          </div>
          <div className={classes.contentTextWrapper}>
            <Typography className={classes.text}>
              Do you have insights, quotes, and reminders on sticky notes, in
              physical and online notebooks, and 101 other places...and still
              forget where you put that one piece of information you need right
              now?
            </Typography>
            <Typography className={classes.text}>
              Wish you had a way to build upon the insights you captured in a
              meaningful way?
            </Typography>
            <Typography className={classes.text}>
              Educe is setup to be your central repository for you to store your
              short insights and then build upon them.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoOverload;
