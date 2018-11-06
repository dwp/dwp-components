import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Link } from '../../link';

const Style = styled(Link)`
  display: block;
  margin: 0;
  padding: ${({ theme }) => theme.spacing.unit(2)} ${({ theme }) => theme.spacing.unit(2)};

  ${({ theme }) => theme.helpers.visuallyHidden(theme)`
    ${theme => theme.helpers.focus(true)}
    color: ${theme => theme.palette.common.text};
  `}
`;

const Skip = ({ children, ...props }) => (
  <Style {...props}>{children}</Style>
);

Skip.displayName = 'Skip';

Skip.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Skip;
