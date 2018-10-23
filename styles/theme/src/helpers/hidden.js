const { contextLiteral } = require('../utils');

const extracted = require('../raw.json');

module.exports = (context = {}) => (strings, ...values) => contextLiteral(extracted)`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;

  &:active,
  &:focus {
    position: static;
    width: auto;
    height: auto;
    margin: inherit;
    overflow: visible;
    clip: auto;
    clip-path: none;
    white-space: inherit;
    
    ${contextLiteral(context)(strings, ...values)}
  }
`;
