# GOV.UK Shareable Styles

This repository provides a framework agnostic theme for intended use alongside any object or tagged template literal framework.

It contains properties and helpers, extracted directly from the SASS-authored [govuk-frontend](#TODO) library. If you're looking for the components, [click here](/components/react).

> The styles and variables included inside the `govuk-frontend` are automatically extracted at build time and **not** hardcoded into this library.

## Getting Started

Add the library to your project as a dependency using:

```
npm i TODO --save
```

If you need access to the GDS font and crown images, ensure that the contents of the `assets/` folder (packaged inside the library) are copied over to your build destination. This can be achieved by adding a `postbuild` or `postinstall` script hook to your `package.json`.

```json
{
  "scripts": {
    "postbuild": "@dwp/components-theme copy --destination ./build/static/"
  }
}
```

Afterwards, be sure to add the asset paths for the library to your `.gitignore` file, for example:

```
/path/to/assets/fonts
/path/to/assets/images
```

---

The library is implemented to ensure that it is easy to take advantage of [tagged template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals), including numerous helpers designed at producing strings of CSS compatible with various pre-processing frameworks.

## Usage

```js
const { typography } = require('@dwp/components-theme');
// OR: import { typography } from '@dwp/components-theme';

console.log(typography.headings.xl());
```

Using the XL typography heading helper as the example above demonstrates, produces the following valid css string:

> Note how the helper makes zero assumptions about the class name or identifier. This responsibility is left to the implementing framework or library.

```css
font-weight: 700;
font-family: 'nta', 'Arial', sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;

@media print {
  font-family: sans-serif;
}

@media only screen and (min-width: 320px) {
  font-size: 32px;
  line-height: 35px;
}

@media only screen and (min-width: 641px) {
  font-size: 48px;
  line-height: 50px;
}
```

Afterwards, we can begin to introduce ES6 tagged template literals to compile more complex components from these base style helpers.

```js
const theme = require('TODO');

const str = tagged`
  ${theme.typography.headings.m()}
  ${theme.spacing.property('padding', { top: 8, right: 7, bottom: 6, left: 5 })}
  margin: ${() => theme.spacing.unit(4)};
`;
```

The above example produces the following `str` value:

```css
font-weight: 700;
font-family: 'nta', 'Arial', sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;

@media print {
  font-family: sans-serif
}

@media only screen and (min-width: 320px) {
  font-size: 18px;
  line-height: 20px;
}

@media only screen and (min-width: 641px) {
  font-size: 24px;
  line-height: 30px;
}

padding-top: 30px;
padding-right: 25px;
padding-bottom: 20px;
padding-left: 15px;

@media only screen and (min-width: 641px) {
  padding-top: 50px;
  padding-right: 40px;
  padding-bottom: 30px;
  padding-left: 25px;
}

margin: 15px
```
