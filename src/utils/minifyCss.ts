export const minifyCss = (arg: any): string => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const css: string = typeof arg === 'string' ? arg : arg[0];

  return css.trim().replace(/\s/g, '');
};
