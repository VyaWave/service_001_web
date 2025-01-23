import React from 'react';

interface SvgIconProps {
  name: string;
  className?: string;
}

export const Icon: React.FC<SvgIconProps> = ({ name, className = '' }) => {
  const iconName = `#icon-${name}`;
  const svgClass = className ? `svg-icon ${className}` : 'svg-icon';

  return (
    <svg className={svgClass} aria-hidden="true">
      <use xlinkHref={iconName}></use>
    </svg>
  );
};
