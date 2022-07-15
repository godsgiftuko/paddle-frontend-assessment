import { Icon } from '@iconify/react';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { colorPalette } from '../../theme';

export default function Icons({ icon, background, black, border, tilt, noPadding }) {
    const [font, setFont] = useState('');
    
    useEffect(() => {
        const iconComp = <Icon icon={icon} />;
        setFont(iconComp)
    }, [icon]);
    
    return (
        <Box 
            display="inline"
            sx={
                background 
                ? { 
                    border: !border ? 'none' : `1px solid ${colorPalette.primary}`, 
                    backgroundColor: !black ? colorPalette.grey : colorPalette.primary, 
                    borderRadius: 3, 
                    transform: tilt ? 'scaleX(-1)' : 'initial',
                    padding: '4px 12px',
                    color: !black ? colorPalette.primary : colorPalette.white 
                } 
                :{
                    border: !border ? 'none' : `1px solid ${colorPalette.primary}`,
                    padding: !noPadding ? '1px 12px' : 'none',
                    transform: tilt ? 'scaleX(-1)' : 'initial',
                    borderRadius: 3, 
                }
            } 
            alignContent="center"
            >
                {font}
        </Box>
    );
}