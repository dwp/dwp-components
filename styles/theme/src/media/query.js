const { contextLiteral } = require('../utils');

const { govukBreakpoints } = require('../raw.json');

const literal = contextLiteral(govukBreakpoints);

module.exports = (device, context = {}) => (strings, ...values) => literal`
  @media only screen and (min-width: ${({ [device]: val }) => val}) {
    ${contextLiteral(context)(strings, ...values)}
  }
`;
