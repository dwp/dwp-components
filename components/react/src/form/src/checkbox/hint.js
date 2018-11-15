import styled from 'styled-components';

import Hint from '../hint';

import { checkboxPadding } from './constants';

export default styled(Hint)`
  display: block;
  padding-right: ${checkboxPadding};
  padding-left: ${checkboxPadding};
`;
