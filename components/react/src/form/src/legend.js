import styled from 'styled-components';

const Legend = styled.legend`
  box-sizing: border-box;
  max-width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing.unit(2)};
  padding: 0;
  overflow: hidden;
  white-space: normal;
`;

export default Legend;
