import literal from 'tagged-template-literals';
import camelCase from 'camelcase';

export const filterKey = key => camelCase(key.replace(/^govuk/, ''));

export const contextLiteral = ctx => (strings, ...values) =>
  literal(strings, values.map(val => (typeof val === 'function' ? val(ctx) : val)));

export const mapResponsiveKey = (device, obj) => {
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

export const parsePx = str => parseFloat(str, 10);
