const literal = require('tagged-template-literals');
const camelCase = require('camelcase');

exports.filterKey = key => camelCase(key.replace(/^govuk/, ''));

exports.contextLiteral = ctx => (strings, ...values) =>
  literal(strings, values.map(val => (typeof val === 'function' ? val(ctx) : val)));

exports.mapResponsiveKey = (device, obj) => {
  switch (device) {
    case 'desktop':
    case 'tablet':
      return obj.tablet;
    case 'mobile':
    case 'null':
    default:
      return obj.null;
  }
};

exports.parsePx = str => parseFloat(str, 10);
