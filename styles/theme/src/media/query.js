import { contextLiteral } from '../utils';

import extracted from '../raw.json';

const { govukBreakpoints } = extracted;

const literal = contextLiteral(govukBreakpoints);

export default (device, context = {}) => (strings, ...values) => literal`
  @media only screen and (min-width: ${({ [device]: val }) => val}) {
    ${contextLiteral(context)(strings, ...values)}
  }
`;
