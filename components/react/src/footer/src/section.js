import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Container from './container';

import { List } from './navigation';

const Component = ({ className, children }) => (
  <Container>
    <div className={className}>
      {children}
    </div>
  </Container>
);

const Section = styled(Component)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: ${({ theme, align }) => `flex-${align}`};
  margin-right: ${({ theme }) => theme.spacing.page.gutter / 2 * -1}px;
  margin-left: ${({ theme }) => theme.spacing.page.gutter / 2 * -1}px;
  margin-bottom: ${({ theme }) => theme.spacing.page.gutter}px;

  & ${List}:first-child {
    flex-grow: 2;
  }
`;

Section.displayName = 'Footer.Section';

Section.propTypes = {
  align: PropTypes.oneOf(['start', 'end']),
};

Section.defaultProps = {
  align: 'start',
};

export default Section;
