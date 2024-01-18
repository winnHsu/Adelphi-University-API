const generateHoverStyles = (fromColor, toColor, borderWidth) => {
  const animationName = `buttonHovered_${Math.random().toString(36).substr(2, 9)}`;
  const className = `hovered_${Math.random().toString(36).substr(2, 9)}`;

  return {
    css: `
          @keyframes ${animationName} {
              from {
                  background-color: ${fromColor};
                  border-width: 0px;
              }
              to {
                  background-color: ${toColor};
                  border-width: ${borderWidth};
              }
          }

          .${className} {
              animation: ${animationName} 0.3s forwards;
          }
      `,
    className: className
  };
};

export default generateHoverStyles;