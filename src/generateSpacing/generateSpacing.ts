import { GenerateSpacing, SpacingValue } from '../types';

export const generateSpacing: GenerateSpacing = parser => {
  const cache = new Map<SpacingValue, string>();

  const transform = (value: SpacingValue) => {
    const isCustomProperty = typeof value !== 'number';

    if (isCustomProperty) return value;

    // check if that value was already calculated
    // reduction of unnecessary calculations and memory use
    const cachedValue = cache.get(value);

    if (cachedValue) {
      return cachedValue;
    }

    // we are sure its a number due to prev check
    const valueToCache = parser(value as number);

    // save result to save it for further use
    cache.set(value, valueToCache);

    return valueToCache;
  };

  return function spacing(...values) {
    if (values.length === 0) {
      return '';
    }

    return values.reduce(
      (css, value, idx) => `${css}${idx !== 0 ? ' ' : ''}${transform(value)}`,
      ''
    ) as string;
  };
};
