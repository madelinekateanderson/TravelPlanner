import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Image from './island-welcome.jpg';
import Button from '@material-ui/core/Button';
import HomeBar from './HomeBar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontFamily: 'Poppins',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover',
    },
    welcomeInfo: {
      float: 'right',
      marginTop: '220px',
      marginRight: '40px',
      color: 'white',
      textAlign: 'center',
    },
    blurb: {
      width: '600px',
      fontFamily: 'Poppins',
      fontSize: '50px',
      fontWeight: 'bold',
      textShadow: '1px 1px #828282',
    },
    startButton: { marginTop: '20px', backgroundColor: 'white' },
  })
);

export const LandingPage: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <HomeBar />
      <div className={classes.welcomeInfo}>
        <div className={classes.blurb}>
          Transform your <i>dream vacation</i> into a <b>reality</b>
        </div>
        <Button className={classes.startButton} variant='contained'>
          Let's Get Started!
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
