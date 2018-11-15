import styled from 'styled-components';

const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.unit(1)};
  color: ${({ theme }) => theme.palette.common.text};
`;

export default Label;
