import type { BoxProperty, Direction, GenerateBoxProperty } from '../types';

const DIRECTION_ALIAS = {
  y: ['top', 'bottom'],
  x: ['left', 'right'],
};

const formatProperty = (
  property: BoxProperty,
  direction: Direction,
  value: string
): string => {
  if (direction === 'x' || direction === 'y') {
    return `
        ${property}-${DIRECTION_ALIAS[direction][0]}: ${value}; 
        ${property}-${DIRECTION_ALIAS[direction][1]}: ${value}; 
        `;
  }

  return ` 
    ${property}-${direction}: ${value}; 
  `;
};

export const generateBoxProperty: GenerateBoxProperty =
  property =>
  spacing =>
  (value, ...rest) => {
    if (typeof value === 'number' || typeof value === 'string') {
      return `  
          ${property}: ${spacing(value, ...rest)};     
        `;
    }

    return Object.entries(value).reduce(
      (css, [direction, propertyValue]) =>
        ` 
          ${css}
          ${formatProperty(
            property,
            direction as Direction,
            spacing(propertyValue)
          )}
        `,
      ''
    );
  };
