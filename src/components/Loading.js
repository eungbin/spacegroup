import Loader from 'react-loader-spinner';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

function Loading() {
    const classes = useStyles();

    return (
        <Backdrop className={classes.backdrop} open={true}>
            <Loader
                type = "Oval"
                color = "#3d66ba"
                height = {30}
                width = {30}
                timeout = {0}
            />
        </Backdrop>
    );
}

export default Loading;