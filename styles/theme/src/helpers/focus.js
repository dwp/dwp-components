import { contextLiteral } from '../utils';

import extracted from '../raw.json';

export default (fill = false) => contextLiteral(extracted)`
  &:focus {
    outline-width: ${({ govukFocusWidth }) => govukFocusWidth};
    outline-style: solid;
    outline-color: ${({ govukFocusColour }) => govukFocusColour};
    outline-offset: 0;
    background-color: ${({ govukFocusColour }) => (fill ? govukFocusColour : 'none')};
  }
`;
