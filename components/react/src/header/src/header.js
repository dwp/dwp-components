import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Container from './container';

const Header = styled.header`
  padding-top: 3px;
  ${({ theme }) => theme.typography.size(16)}
  border-bottom-width: ${({ theme }) => theme.spacing.unit(2)};
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.palette.display.white};
  color: ${({ theme }) => theme.palette.display.white};
  background-color: ${({ theme }) => theme.palette.display.black};
`;

const HeaderComponent = ({ children, borderColor }) => (
  <Header>
    <Container borderColor={borderColor}>
      {children}
    </Container>
  </Header>
);

HeaderComponent.displayName = 'Header';

HeaderComponent.propTypes = {
  children: PropTypes.node.isRequired,
  borderColor: PropTypes.string,
};

HeaderComponent.defaultProps = {
  borderColor: 'blue',
};

export default HeaderComponent;
