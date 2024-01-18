import React, { useState, useEffect } from 'react'
import colors from '../../config/colors';

const keyframesStyle = `
  @keyframes growTriangle {
    from {
      border-width: 0 5px;
    }
    to {
      border-width: 10px 10px;
    }
  }
`;

export default function FilterButton({ text, isSelected, onClick }) {

    useEffect(() => {
        if (isSelected) setStyle(s => ({ ...s, backgroundColor: colors.logoYellow }));
        else setStyle(s => ({ ...s, backgroundColor: colors.white }));
    }, [isSelected]);

    const [style, setStyle] = useState({
        fontSize: '14px',
        fontWeight: '700',
        color: colors.brown,
        padding: '11px 17px',
        border: 'none',
        borderStyle: 'solid',
        borderWidth: '2px',
        borderColor: colors.logoYellow,
        borderRadius: '3px',
        cursor: 'pointer',
    });

    const triangle = {
        width: '0',
        height: '0',
        borderLeft: '10px solid transparent',
        borderRight: '10px solid transparent',
        borderTop: '10px solid',
        borderTopColor: colors.logoYellow,
        marginTop: '-1px',
        animation: 'growTriangle 0.3s forwards'
    };

    const container = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginRight: '10px',
        marginTop: '80px',
    }

    return (
        <div style={container}>
            <style>{keyframesStyle}</style>
            <button
                style={style}
                onClick={onClick}
                onMouseEnter={() => setStyle(s => ({ ...s, backgroundColor: colors.logoYellow }))}
                onMouseLeave={() => !isSelected && setStyle(s => ({ ...s, backgroundColor: colors.white }))}
            >
                {text}
            </button>
            {isSelected && <div style={triangle} />}
        </div>
    );
}
