# spacing-util

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

A simple library agnostic util functions for `css-in-js` styling solutions to make your design spacing consistent

## Install

```bash
npm install spacing-util
```

## Motivation

---

Not every single UI library has its own `theme` or if does it might lack of `spacing` system that might fit your needs.

`spacing-util` is built in customizable way to allow you create your own spacing system which can work even if your library doesn't allow rewriting/extending their theme.

&nbsp;

## Features

---

&nbsp;

## _Spacing_

Spacing usage is mentioned to be mainly used for `padding` and `margin` properties. That's why it's usage is similar to CSS syntax - you can pass up to 4 properties which will be calculated by `parser` function.

Passing argument different than `number` returns it **without** any transform.

Default parser function multiplies given argument by `4` and returns as `px` unit.

### Example usage

```ts
import { spacing } from 'spacing-util';

spacing(1); // 4px
spacing(5); // 20px
spacing(5, 6); // 20px 24px
spacing(5, 2, 1); // 20px 8px 4px
spacing(5, 6, 1, 6); // 20px 24px 4px 24px

spacing(2, '5em'); // 8px 5em
```

### As inline style

```tsx
import { spacing } from 'spacing-util';

const RandomBox = () => (
  <div
    style={{
      padding: spacing(4, 8),
      borderRadius: spacing(1),
    }}
  >
    random box
  </div>
);
```

### With emotion

```tsx
import { spacing } from 'spacing-util';
import { css, cx } from '@emotion/css';

const RandomBox = () => (
    <div
    className={css`
      padding: ${spacing(4, 8)};
      border-radius: ${spacing(1)};
    `}
  >
    random box
  </div>
```

### With styled-components

```tsx
import { spacing } from 'spacing-util';
import styled from 'styled-components';

const StyledBox = styled.div`
  padding: ${spacing(8)};
  border-radius: ${spacing(1)};
`;

const RandomBox = () => <StyledBox>random box</StyledBox>;
```

&nbsp;

## _Spacing generator_

Sometimes the default parser function might not satisfy you or your design needs. That's why you can create your own `spacing` function.

You are not limited to just one spacing across the app. It's up to you what will be the names for your spacings :)

### Usage

```ts
import { generateSpacing } from 'spacing-util';
import type { SpacingParser } from 'spacing-util';

// Default parser function
const parser: SpacingParser = value => `${~~(value * 4)}px`;

const spacing = generateSpacing(parser);
```

## _Padding and margin function_

In case when you are lazy enough and feel bored of typing for example:

```tsx
const StyledBox = styled.div`
  padding: ${spacing(8, 4)};
  margin: ${spacing(5)};
`;
```

There is a shorter way to do that by using `padding` and `margin` util functions.

### Usage

```tsx
import { padding, margin } from 'spacing-util';

const StyledBox = styled.div`
  ${padding(8, 4)}
  ${margin(5)}
`;
```

Both shares same usage as `spacing` function with 1 extra option. Instead `number` or `string` input, you can an object of type:

```ts
{
  x: number | string;
  y: number | string;
  top: number | string;
  right: number | string;
  bottom: number | string;
  left: number | string;
}
```

`top, right, bottom, left` are responsible for returning just for these specific direction meanwhile `x, y` are like a shortcut for `left + right` and `top + bottom` usage. Values given for given key later on are transformed with spacing `parser` function.

*Note* -  if u will use `x` shorthand with `left` together, the order matters! The value at the bottom will ovveride the previous one - behavior just like in vanilla CSS

### Examples

```tsx
padding({
  x: 4,
  top: 5,
});

// returns
// padding-top: 20px;
// padding-right: 20px;
// padding-left: 20px;
```

## _Padding and margin generator_

Since margin and padding are built on top of `spacing` function and you enjoy it's usage you are able to create your own `padding` and `margin` utils by passing a parser function to it's generator function.

### Usage

```ts
import { generateMargin, generatePadding } from 'spacing-util';
import type { SpacingParser } from 'spacing-util';

// Default parser function
const parser: SpacingParser = value => `${~~(value * 4)}px`;

const margin = generateMargin(parser);
const padding = generatePadding(parser);
```

[build-img]: https://github.com/EmilMalanczak/spacing-util/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/EmilMalanczak/spacing-util/actions/workflows/release.yml
[npm-img]: https://img.shields.io/npm/v/spacing-util
[npm-url]: https://www.npmjs.com/package/spacing-util
[issues-img]: https://img.shields.io/github/issues/EmilMalanczak/spacing-util
[issues-url]: https://github.com/EmilMalanczak/spacing-util/issues
[codecov-img]: https://codecov.io/gh/EmilMalanczak/spacing-util/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/EmilMalanczak/spacing-util
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
