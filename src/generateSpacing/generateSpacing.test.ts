import { SpacingParser } from '../types';
import { generateSpacing } from './generateSpacing';

describe('generateSpacing function', () => {
  const testParser: SpacingParser = x =>
    typeof x === 'number' ? `${x + 2}px` : x;

  const spacing = generateSpacing(testParser);

  test('no arguments returns empty string', () => {
    expect(spacing()).toBe('');
  });

  test('string argument will be passed as is', () => {
    expect(spacing('20em')).toBe('20em');
  });

  test('single argument is multiplied correctly', () => {
    expect(spacing(2)).toBe(testParser(2));
    expect(spacing(10)).toBe(testParser(10));
  });

  test('few arguments are multiplied correctly', () => {
    expect(spacing(2, 4)).toBe(`${testParser(2)} ${testParser(4)}`);
    expect(spacing(2, 4, 3)).toBe(
      `${testParser(2)} ${testParser(4)} ${testParser(3)}`
    );
    expect(spacing(2, 4, 1, 3)).toBe(
      `${testParser(2)} ${testParser(4)} ${testParser(1)} ${testParser(3)}`
    );
  });

  test('numbers below 0 are multiplied correctly', () => {
    expect(spacing(2, -4)).toBe(`${testParser(2)} ${testParser(-4)}`);
    expect(spacing(-4)).toBe(testParser(-4));
  });

  test('not integer numbers are multiplied correctly', () => {
    expect(spacing(1.5)).toBe(testParser(1.5));
    expect(spacing(2.25)).toBe(testParser(2.25));
    expect(spacing(3.75)).toBe(testParser(3.75));
  });
});
