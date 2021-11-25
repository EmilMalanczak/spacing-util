import type {
  BoxPropertyTransformer,
  GenerateBoxProperty,
  SpacingArgs,
} from '../types';

export const generateBoxProperty: GenerateBoxProperty = property => spacing => {
  const transform: BoxPropertyTransformer = (value, ...rest) => {
    if (typeof value === 'number' || typeof value === 'string') {
      const spacingArgs = [value, ...rest] as SpacingArgs;
      // TODO: unexpected typing issue - probably bug comes
      // from FixedArraySize type

      return ` 
          ${property}: ${spacing(...(spacingArgs as any))};  
        `;
    }

    if ('x' in value || 'y' in value) {
      const { x, y } = value;

      return `
          ${property}: ${spacing(y ?? 0, x ?? 0)};
        `;
    }

    return Object.entries(value).reduce(
      (css, [direction, propertyValue]) =>
        `
          ${css}
          ${property}-${direction}: ${spacing(propertyValue)}; 
        `,
      ''
    );
  };

  return transform;
};
