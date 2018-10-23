const { contextLiteral } = require('../utils');

const extracted = require('../raw.json');

module.exports = (fill = false) => contextLiteral(extracted)`
  &:focus {
    outline-width: ${({ govukFocusWidth }) => govukFocusWidth};
    outline-style: solid;
    outline-color: ${({ govukFocusColour }) => govukFocusColour};
    outline-offset: 0;
    background-color: ${({ govukFocusColour }) => fill ? govukFocusColour : 'none'};
  }
`;
