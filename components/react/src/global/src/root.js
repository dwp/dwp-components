import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }

  ${({ theme }) => theme.typography.common()}

  a {
    color: ${({ theme }) => theme.palette.common.link};
  }

  ${({ theme, fontPath }) => theme.media.fontFace(fontPath)}
`;
