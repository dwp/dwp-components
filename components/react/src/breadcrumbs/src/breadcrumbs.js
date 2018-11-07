import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Link } from '../../link';

const altitude = (size, border) => Math.sqrt((size + border) ** 2 + (size + border) ** 2) * 0.5;

export const Container = styled.ol`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  ${({ theme }) => theme.typography.size(16)}
  color: ${({ theme }) => theme.palette.common.text};
  margin-left: 0;
  margin-right: 0;
  margin-top: ${({ theme }) => theme.spacing.unit(3)};
  margin-bottom: ${({ theme }) => theme.spacing.unit(2)};
  padding: 0;
  list-style-type: none;
`;

Container.displayName = 'Breadcrumbs.Container';

export const Item = styled.li`
  flex: flex-shrink;
  position: relative;
  margin-bottom: ${({ theme }) => theme.spacing.unit(1)};
  margin-left: ${({ theme }) => theme.spacing.unit(2)};
  padding-left: ${({ size, border, theme }) =>
    parseInt(theme.spacing.unit(2), 10) + altitude(size, border)}px;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: -1px;
    bottom: 1px;
    left: ${({ size, border }) => altitude(size, border) * -2 + size + border}px;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    margin: auto 0;
    transform: rotate(45deg);
    border: solid;
    border-width: ${({ border }) => border}px ${({ border }) => border}px 0 0;
    border-color: ${({ theme }) => theme.palette.display.borderColour};
  }

  &:first-child {
    margin-left: 0;
    padding-left: 0;

    &:before {
      content: none;
      display: none;
    }
  }

  & > ${Link} {
    &:link,
    &:visited,
    &:hover,
    &:active,
    &:focus {
      color: ${({ theme }) => theme.palette.common.text};
    }
  }
`;

Item.propTypes = {
  border: PropTypes.number,
  size: PropTypes.number,
};

Item.defaultProps = {
  border: 1,
  size: 7,
};

Item.displayName = 'Breadcrumbs.Item';
