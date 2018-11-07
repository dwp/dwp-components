import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Container from './container';

const Component = ({ children, className, borderColor }) => (
  <header className={className}>
    <Container borderColor={borderColor}>{children}</Container>
  </header>
);

Component.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  borderColor: PropTypes.string,
};

Component.defaultProps = {
  borderColor: 'blue',
};

const Header = styled(Component)`
  padding-top: 3px;
  ${({ theme }) => theme.typography.size(16)}
  border-bottom-width: ${({ theme }) => theme.spacing.unit(2)};
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.palette.display.white};
  color: ${({ theme }) => theme.palette.display.white};
  background-color: ${({ theme }) => theme.palette.display.black};
`;

Header.displayName = 'Header';

export default Header;
