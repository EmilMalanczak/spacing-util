export type SpacingValue = string | number;

export type SpacingParser = (value: number) => string;

type FixedSizeArray<T, N extends number> = N extends 0
  ? never[]
  : {
      0: T;
      length: N;
    } & ReadonlyArray<T>;

export type SpacingArgs = [] | FixedSizeArray<SpacingValue, 1 | 2 | 3 | 4>;

export type Spacing = (...values: SpacingArgs) => string;

type BoxProperty = 'margin' | 'padding';

type NotEmpty<T> = unknown extends T ? never : T;

type AxisProperty = Partial<Record<'x' | 'y', SpacingValue>>;

type SingleProperty = Partial<
  Record<'left' | 'top' | 'right' | 'bottom', SpacingValue>
>;

export type BoxPropertyValue =
  | NotEmpty<AxisProperty>
  | NotEmpty<SingleProperty>
  | SpacingValue;

export type BoxPropertyTransformer = (
  value: BoxPropertyValue | SpacingValue,
  ...rest: SpacingArgs
) => string;

export type GenerateBoxProperty = (
  property: BoxProperty
) => (spacing: Spacing) => BoxPropertyTransformer;

export type GenerateSpacing = (parser: SpacingParser) => Spacing;
