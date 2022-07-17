import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { withStyles } from '@mui/styles';
import { colorPalette } from '../../theme';

const styles = {
    root: {
        background: colorPalette.secondaryGradient,
        border: 0,
        borderRadius: '80px !important',
        color: 'white !important',
        fontWeight: '700 !important',
        height: 40,
        padding: '0 30px',
    }
};

const IconButton = (props) => {
    const { children, iconAlign = 'left', ...buttonProps } = props;
    const { icon, classes, background } = buttonProps;
    const isLeftAlign = iconAlign === 'left';
    

    const button = (
        isLeftAlign
        ? <Button className={classes.root} sx={{ background }}  {...buttonProps} endIcon={icon}>
            {children}
        </Button> 
        : <Button className={classes.root} {...buttonProps} startIcon={icon}>
            {children}
        </Button>
    );

    return button;
}

IconButton.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(IconButton);