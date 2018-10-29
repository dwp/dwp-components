import React, { Fragment } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';

const Fonts = createGlobalStyle`
  ${({ theme, fontPath }) => theme.media.fontFace(fontPath)}
`;

const Global = ({ children, theme, fontPath }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Fonts fontPath={fontPath} />
      {children}
    </Fragment>
  </ThemeProvider>
);

Global.displayName = 'Global';

Global.propTypes = {
  theme: PropTypes.object.isRequired,
  fontPath: PropTypes.string.isRequired,
};

Global.defaultProps = {
  fontPath: 'fonts'
};

export default Global;
