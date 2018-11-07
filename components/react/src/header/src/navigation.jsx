import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Link } from '../../link';

export const Name = styled(Link)`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.unit(2)};
  ${({ theme }) => theme.typography.size(24, true)} ${({ theme }) => theme.helpers.focus(true)};
`;

Name.displayName = 'Navigation.Name';

export const Container = styled.div`
  width: 66.66%;

  & ${Link}, & ${Name} {
    text-decoration: none;

    &:link,
    &:visited {
      color: ${({ theme }) => theme.palette.display.white};
    }

    &:focus {
      color: ${({ theme }) => theme.palette.common.focusText};
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

Container.displayName = 'Navigation.Container';

const MenuContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  list-style: none;
`;

MenuContainer.displayName = 'Navigation.StyledMenuContainer';

export const Menu = ({ children }) => (
  <nav aria-label="Top Level Navigation">
    <MenuContainer>{children}</MenuContainer>
  </nav>
);

Menu.displayName = 'Navigation.Menu';

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};

const ActiveStyle = ({ active, theme }) => {
  if (active) {
    return `
      &:link,
      &:hover,
      &:visited {
        color: #1d8feb;
      }

      &:focus {
        color: ${theme.palette.common.text};
      }
    `;
  }
  return null;
};

export const Item = styled.li`
  padding: ${({ theme }) => theme.spacing.unit(2)} 0;
  margin-left: ${({ theme }) => theme.spacing.unit(3)};
  border-bottom: solid 1px ${({ theme }) => theme.palette.display.white};

  ${({ theme }) => theme.media.query('tablet')`
    border: 0;
  `} &:first-child {
    margin-left: 0;
  }

  & ${Link} {
    ${({ theme }) => theme.helpers.focus(true)} ${({ theme }) =>
      theme.typography.size(16, true)}
    white-space: nowrap;
    ${ActiveStyle};
  }
`;

Item.displayName = 'Navigation.Item';

Item.propTypes = {
  active: PropTypes.bool,
};

Item.defaultProps = {
  active: false,
};
