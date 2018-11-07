import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Section from '../section';

import Logo from './logo';
import License from './license';
import Text from './text';

const Item = styled.div`
  margin-right: ${({ theme }) => theme.spacing.page.gutter / 2}px;
  margin-left: ${({ theme }) => theme.spacing.page.gutter / 2}px;
  margin-bottom: ${({ theme }) => theme.spacing.unit(5)};
  ${({ grow }) => (grow ? 'flex-grow: 1;' : null)};
`;

Item.displayName = 'Footer.Meta.Item';

const Meta = ({ children, logoProps }) => (
  <Section align="end">
    <Item grow>{children}</Item>
    <Item>
      <Logo {...logoProps}>&copy; Crown Copyright</Logo>
    </Item>
  </Section>
);

Meta.License = License;

Meta.Text = Text;

Meta.displayName = 'Footer.Meta';

Meta.propTypes = {
  logoProps: PropTypes.object.isRequired,
  children: PropTypes.node,
};

Meta.defaultProps = {
  children: () => <div/>
};

export default Meta;
