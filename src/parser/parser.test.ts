import { defaultParser } from './parser';

describe('parser function', () => {
  test('passing number value multiplies it by 4 and returns as px', () => {
    expect(defaultParser(5)).toBe('20px');
  });

  test('passing value other than number returns value unchanged', () => {
    expect(defaultParser('5em')).toBe('5em');
  });
});
