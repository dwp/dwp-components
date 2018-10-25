import styled from 'styled-components';

const passthrough = (...all) => all;

const Component = passthrough`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ theme }) => theme.spacing.page.width}px;
`;

const Container = styled.div(...Component);

Container.displayName = 'Container';

export default Container;

// import styled from 'styled-components';
//
// const Container = styled.div`
//   display: block;
//   margin-left: auto;
//   margin-right: auto;
//   max-width: ${({ theme }) => theme.spacing.page.width}px;
// `;
//
// Container.displayName = 'Container';
//
// export default Container;
