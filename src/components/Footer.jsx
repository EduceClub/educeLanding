import { Typography } from '@mui/material';
import { useFooterStyles } from './Footer.styles';

const Footer = () => {
  const classes = useFooterStyles();

  return (
    <div className={classes.footerWrapper}>
      <Typography className={classes.educeCopyright}>
        {' '}
        &copy;Educe {new Date().getFullYear()}
      </Typography>
    </div>
  );
};

export default Footer;
