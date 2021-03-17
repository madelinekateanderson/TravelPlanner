import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import LandingPage from './LandingPage';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);

export const App: React.FunctionComponent = () => {
  const classes = useStyles();
  return <LandingPage />;
};

export default App;
