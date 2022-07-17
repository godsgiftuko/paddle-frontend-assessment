import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { withStyles } from '@mui/styles';
import { colorPalette } from '../../theme';

const styles = {
    root: {
      background: colorPalette.blue,
      border: 0,
      borderRadius: '80px !important',
      color: 'white !important',
      fontWeight: '700 !important',
      height: 40,
      padding: '0 30px',
    }
};

const RoundedButton = (props) => {
    const { children, ...buttonProps } = props;
    const { classes } = buttonProps;

    const button = (
        <Button className={classes.root} {...buttonProps} >
            {children}
        </Button>
    );

    return button;
}

RoundedButton.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(RoundedButton);