import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import PublicIcon from '@material-ui/icons/Public';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      color: 'white',
      fontSize: '35px',
      marginLeft: '10px',
      display: 'flex',
    },
    appBarText: {
      margin: '0px',
      display: 'flex',
    },
    icon: {
      marginTop: '10px',
      marginRight: '10px',
    },
    option: {
      fontWeight: 'bold',
      cursor: 'pointer',
      marginLeft: '10px',
      marginRight: '10px',
      '&:hover': {
        color: '#ccc',
      },
    },
  })
);

export const HomeBar: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.appBar}>
      <PublicIcon className={classes.icon} fontSize={'inherit'} />
      <div className={classes.appBarText}>
        <div className={classes.option}>Login</div> <div>| </div>
        <div className={classes.option}>Sign Up</div>
      </div>
    </div>
  );
};

export default HomeBar;
