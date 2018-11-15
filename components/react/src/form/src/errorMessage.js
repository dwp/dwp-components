import styled from 'styled-components';

const ErrorMessage = styled.span`
  display: block;
  clear: both;
  margin-bottom: ${({ theme }) => theme.spacing.unit(3)};
  color: ${({ theme }) => theme.palette.common.error};
`;

export default ErrorMessage;
