import styled from 'styled-components';

import { Paragraph } from '../../../paragraph';

export default styled(Paragraph.S)`
  color: inherit;
  margin-bottom: ${({ theme }) => theme.spacing.unit(4)};
`;
