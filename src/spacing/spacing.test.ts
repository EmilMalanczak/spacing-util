import { defaultSpacing as spacing } from './spacing';

describe('default spacing', () => {
  test('single argument is multiplied correctly', () => {
    expect(spacing(2)).toBe('8px');
    expect(spacing(10)).toBe('40px');
  });

  test('few arguments are multiplied correctly', () => {
    expect(spacing(2, 4)).toBe('8px 16px');
    expect(spacing(2, 4, 3)).toBe('8px 16px 12px');
    expect(spacing(2, 4, 1, 3)).toBe('8px 16px 4px 12px');
  });

  test('numbers below 0 are multiplied correctly', () => {
    expect(spacing(2, -4)).toBe('8px -16px');
    expect(spacing(-4)).toBe('-16px');
  });

  test('not integer numbers are multiplied correctly', () => {
    expect(spacing(1.5)).toBe('6px');
    expect(spacing(2.25)).toBe('9px');
    expect(spacing(3.75)).toBe('15px');
  });
});
