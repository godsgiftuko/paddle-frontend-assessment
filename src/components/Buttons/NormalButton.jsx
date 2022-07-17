import PropTypes from 'prop-types';
// mui
import { Button } from '@mui/material';
import { withStyles } from '@mui/styles';
// theme
import { colorPalette, typography } from '../../theme';
// components
import { Link } from 'react-router-dom';
const { size, weight }  = typography;

const styles = {
    root: {
      background: colorPalette.blue,
      display: 'none',
      border: 0,
      color: colorPalette.white,
      fontWeight: weight.semibold1,
      height: 40,
      padding: '0 30px',
    }
};

const NormalButton = ({ children, classes, radius=false, noHover=false, to, ...rest }) => {
    // const { children, radius='51px', ...buttonProps } = props;


    const button = (
        <Button className={classes.root} {...rest} 
          sx={{ 
            borderRadius: (!radius && 0 )|| radius === true && '51px' || radius, 
            background: colorPalette.blue,
            border: 0,
            color: colorPalette.white,
            fontWeight: weight.semibold1,
            fontSize: size.small16,
            height: 40,
            padding: '0 30px',
            "&:hover": {
              background: noHover ? styles.root.background: ''
            }
          }}>
            <Link to={to} style={{ color: styles.root.color }}>
              {children}
            </Link>
        </Button>
    );

    return button;
}

NormalButton.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(NormalButton);