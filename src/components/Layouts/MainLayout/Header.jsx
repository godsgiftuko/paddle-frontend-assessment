import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

const styles = {
    root: {
        background: 'red',
    },
};

const Header = (props) => {
    const { classes } = props;

    return <header className={classes.root}>Header</header>;
};

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
