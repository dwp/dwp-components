const compile = require('tagged-template-literals');
const theme = require('./commonjs');

console.log(JSON.stringify(theme, null, '  '));

// const literal = (strings, ...values) =>
//   compile(strings, values.map(val => (typeof val === 'function' ? val() : val)));
//
// const str = literal`
//   ${() => theme.typography.headings.m()}
//   ${() => theme.spacing.property('padding', { top: 8, right: 7, bottom: 6, left: 5 })}
//   margin: ${() => theme.spacing.unit(4)}
// `;
//
// console.log(str); // eslint-disable-line no-console
//
// // console.log(theme.typography.headings.xl());
