import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.spacing.page.width}px;
`;

Container.displayName = 'Footer.Container';

export default Container;
