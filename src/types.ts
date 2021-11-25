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
