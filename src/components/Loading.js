import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  spinner: {
    marginRight: 20,
  },
};

const Loading = ({message = 'Loading...', classes}) => {
  return (
    <div className={classes.root}>
      <CircularProgress className={classes.spinner}/>
      <Typography variant="h4">{message}</Typography>
    </div>
  );
};

export default withStyles(styles)(Loading);
