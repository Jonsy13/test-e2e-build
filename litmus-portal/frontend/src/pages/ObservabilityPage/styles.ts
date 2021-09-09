import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(2.5),
  },
  appBar: {
    boxShadow: 'none',
    position: 'static',
    backgroundColor: 'inherit',
  },
}));

export default useStyles;
