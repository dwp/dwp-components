import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Link } from '../../link';

export const Item = styled.li`
  ${({ theme }) => theme.media.query('tablet', theme)`
    margin-bottom: ${({ spacing }) => spacing.unit(1)};
  `};
`;

Item.displayName = 'List.Item';

const bulletedList = ({ bullet, theme } = {}) => {
  if (bullet) {
    return `
      padding-left: ${theme.spacing.unit(4)};
      list-style: disc;
    `;
  }
  return null;
};

const numericalList = ({ numerical, theme } = {}) => {
  if (numerical) {
    return `
      padding-left: ${theme.spacing.unit(4)};
      list-style-type: decimal;
    `;
  }
  return null;
};

const inlineList = ({ inline, theme } = {}) => {
  if (inline) {
    return `
      display: inline-block;
      margin-left: ${theme.spacing.unit(3)};

      &:first-child {
        margin-left: 0;
      }
    `;
  }
  return null;
};

export const List = styled.ul`
  margin-top: 0;
  padding-left: 0;
  list-style-type: none;
  color: ${({ theme }) => theme.palette.common.text};
  ${({ theme }) => theme.typography.size(19)}
  ${({ theme }) => theme.spacing.property('margin-bottom', 4)}

  column-gap: ${({ theme }) => theme.spacing.page.gutter}px;

  ${({ columns, theme }) => theme.media.query('tablet')`
    column-count: ${columns};
  `}

  & ${Item} {
    ${inlineList}
  }

  & ${Link} {
    &:link {
      color: ${({ theme }) => theme.palette.common.link};
    }

    &:visited {
      color: ${({ theme }) => theme.palette.common.linkVisited};
    }

    &:hover {
      color: ${({ theme }) => theme.palette.common.linkHover};
    }

    &:active {
      color: ${({ theme }) => theme.palette.common.linkActive};
    }
  }

  ${bulletedList}

  ${numericalList}
`;

List.displayName = 'List.List';

List.propTypes = {
  bullet: PropTypes.bool,
  numerical: PropTypes.bool,
  /** The number of columns to use to display the list */
  columns: PropTypes.oneOf([1, 2, 3]),
  children: PropTypes.arrayOf(PropTypes.instanceOf(Item)),
};

List.defaultProps = {
  bullet: false,
  numerical: false,
  columns: 1,
};
