import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 450,
    marginBottom: '20px',
    position: 'relative'
  },
  media: {
    height: '65%'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    position: 'absolute',
    right: '47%',
  },
}));