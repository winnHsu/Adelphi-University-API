import React, { useState } from 'react';
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import colors from '../../config/colors';
import generateHoverStyles from '../../utilities/generateHoverStyles';

export default function CircleButton({ isLeft, onClick, isButtonDisabled }) {
    const [isHovered, setIsHovered] = useState(false);
    const hoverStyles = generateHoverStyles(colors.white, colors.logoYellow, '1px');

    const buttonStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '46px',
        width: '46px',
        borderRadius: '50%',
        border: 'none',
        backgroundColor: isHovered ? colors.logoYellow : colors.white,
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: colors.logoYellow,
        cursor: isButtonDisabled ? null : 'pointer',
    };

    return (
        <>
            <style>{hoverStyles.css}</style>
            <button
                onClick={onClick}
                style={buttonStyle}
                disabled={isButtonDisabled}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={isHovered ? hoverStyles.className : ''}
            >
                {isLeft ? <IoMdArrowDropleft size={26} /> : <IoMdArrowDropright size={26} />}
            </button>
        </>
    );
}
