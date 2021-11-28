export type SpacingValue = string | number;

export type SpacingParser = (value: SpacingValue) => string;

type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N
  ? R
  : _TupleOf<T, N, [T, ...R]>;

type Tuple<T, N extends number> = N extends N
  ? number extends N
    ? T[]
    : _TupleOf<T, N, []>
  : never;

export type SpacingArgs = Tuple<SpacingValue, 0 | 1 | 2 | 3 | 4>;

export type Spacing = (...values: SpacingArgs) => string;

type NotEmpty<T> = unknown extends T ? never : T;

export type Direction = 'left' | 'top' | 'right' | 'bottom' | 'x' | 'y';
type DirectionProperty = Partial<Record<Direction, SpacingValue>>;

export type BoxProperty = 'margin' | 'padding';

export type BoxPropertyValue = NotEmpty<DirectionProperty> | SpacingValue;

export type BoxPropertyTransformer = (
  value: BoxPropertyValue,
  ...rest: Tuple<SpacingValue, 0 | 1 | 2 | 3>
) => string;

export type GenerateBoxProperty = (
  property: BoxProperty
) => (spacing: Spacing) => BoxPropertyTransformer;

export type GenerateSpacing = (parser: SpacingParser) => Spacing;
