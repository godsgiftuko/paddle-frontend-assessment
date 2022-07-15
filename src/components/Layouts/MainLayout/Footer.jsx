import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

const styles = {
    root: {
        background: 'yellow',
    },
};

const Footer = (props) => {
    const { classes } = props;

    return <footer className={classes.root}>Footer</footer>;
};

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);
