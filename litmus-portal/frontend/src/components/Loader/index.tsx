import { makeStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Center from '../../containers/layouts/Center';

interface LoaderProps {
  size?: number;
  message?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  spinner: {
    color: theme.palette.primary.main,
  },
}));

const Loader: React.FC<LoaderProps> = ({ size, message }) => {
  const classes = useStyles();
  const defaultSize = 40;
  return (
    <div>
      <Center>
        <CircularProgress
          className={classes.spinner}
          size={size || defaultSize}
        />
      </Center>
      <Typography>{message}</Typography>
    </div>
  );
};

export default Loader;
