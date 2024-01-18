import React, { useState } from "react";
import colors from "../../config/colors";
import generateHoverStyles from "../../utilities/generateHoverStyles";

export default function IconButton({ text, Icon, onClick, fromColor, toColor, height, width, isLeft, iconColor, textColor }) {
  const hoverStyles = generateHoverStyles(fromColor, toColor, '5px');
  const [isHovered, setIsHovered] = useState(false);

  const baseStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height,
    gap: '2px',
    marginLeft: '20px',
    fontSize: '15px',
    fontWeight: '700',
    border: 'none',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: colors.logoYellow,
    backgroundColor: fromColor,
    cursor: 'pointer',
  };

  return (
    <>
      <style>{hoverStyles.css}</style>
      <button
        style={baseStyle}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={isHovered ? hoverStyles.className : ''}
      >
        {isLeft && <Icon size={24} color={iconColor} />}
        <p style={{ color: textColor }}>{text}</p>
        {!isLeft && <Icon size={24} color={iconColor} />}
      </button>
    </>
  );
}
