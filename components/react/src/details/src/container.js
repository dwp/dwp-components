import styled from 'styled-components';

const Container = styled.details`
  display: block;
  ${({ theme }) => theme.typography.size(19)};
  color: ${({ theme }) => theme.palette.common.text};
  ${({ theme }) => theme.spacing.property('margin-bottom', 6)};
`;

Container.displayName = 'Details.Container';

export default Container;
