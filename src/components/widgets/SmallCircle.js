import React from 'react';
import colors from '../../config/colors';

const SmallCircle = ({ color }) => {
    const circleStyle = {
        width: color === 'yellow' ? '4px' : '3px',
        height: color === 'yellow' ? '4px' : '3px',
        borderRadius: '50%',
        backgroundColor: color === 'yellow' ? colors.logoYellow : colors.gray,
    };

    return <div style={circleStyle}></div>;
};

export default SmallCircle;