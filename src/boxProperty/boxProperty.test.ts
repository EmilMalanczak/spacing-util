import { minifyCss } from '../utils/minifyCss';
import { padding } from './boxProperty';

describe('box-property theme util', () => {
  test('single argument', () => {
    expect(minifyCss(padding(10))).toBe(
      minifyCss` 
            padding: 40px; 
        `
    );
  });

  test('multiple arguments', () => {
    expect(minifyCss(padding(10, 4, 4, 5))).toBe(
      minifyCss` 
            padding: 40px 16px 16px 20px;
        `
    );
  });

  test('x, y axis', () => {
    expect(minifyCss(padding({ y: 10 }))).toContain(
      minifyCss` 
              padding-top: 40px;
          `
    );

    expect(minifyCss(padding({ y: 10 }))).toContain(
      minifyCss` 
                padding-bottom: 40px;
            `
    );

    expect(minifyCss(padding({ x: 3 }))).toContain(
      minifyCss` 
              padding-left: 12px;
          `
    );

    expect(minifyCss(padding({ x: 3 }))).toContain(
      minifyCss` 
              padding-right: 12px;
          `
    );
  });

  test('x axis', () => {
    expect(minifyCss(padding({ x: 3 }))).toContain(
      minifyCss` 
            padding-left: 12px;
        `
    );

    expect(minifyCss(padding({ x: 3 }))).toContain(
      minifyCss` 
            padding-right: 12px;
        `
    );
  });

  test('y axis', () => {
    expect(minifyCss(padding({ y: 10 }))).toContain(
      minifyCss` 
            padding-top: 40px;
        `
    );

    expect(minifyCss(padding({ y: 10 }))).toContain(
      minifyCss` 
              padding-bottom: 40px;
          `
    );
  });

  test('multiple directions', () => {
    const css = minifyCss(padding({ left: 5, bottom: 3, top: 10 }));

    expect(css).toContain(
      minifyCss` 
            padding-top: 40px;
        `
    );

    expect(css).toContain(
      minifyCss` 
            padding-left: 20px;
        `
    );

    expect(css).toContain(
      minifyCss` 
            padding-bottom: 12px;
        `
    );

    expect(css).not.toContain(
      minifyCss` 
            padding-top: 12px;
        `
    );
  });
});
