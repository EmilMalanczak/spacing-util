import { generateBoxProperty } from '../generateBoxProperty';
import { spacing } from '../spacing';

export const generatePadding = generateBoxProperty('padding');

export const generateMargin = generateBoxProperty('margin');

export const padding = generatePadding(spacing);
export const margin = generateMargin(spacing);
