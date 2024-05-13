import React from 'react';

const ColorBox = ({ color }) => {
    const boxStyle = {
        width: '200px',
        height: '200px',
        backgroundColor: color,
    };

    return (
        <div style={boxStyle}></div>
    );
}

export default ColorBox;
