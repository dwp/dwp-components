import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import Root from './root';

const Global = ({ children, theme, fontPath }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Root fontPath={fontPath} />
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
