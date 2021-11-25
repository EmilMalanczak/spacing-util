import { SpacingParser } from './types';

// https://www.measurethat.net/Benchmarks/Show/11037/0/double-tilde-vs-mathfloor
// eslint-disable-next-line no-bitwise
export const defaultParser: SpacingParser = value => `${~~(value * 4)}px`;
