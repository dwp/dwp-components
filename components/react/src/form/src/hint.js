import styled from 'styled-components';

import Label from './label';

const Hint = styled.span`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.unit(3)};
  color: ${({ theme }) => theme.palette.common.secondaryText};

  ${Label} + & {
    margin-bottom: ${({ theme }) => theme.spacing.unit(2)};
  }
`;

export default Hint;
