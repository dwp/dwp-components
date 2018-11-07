import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { List as Standard } from '../../list';
import { Heading } from '../../heading';

const Container = ({ className, title, listProps, children }) => (
  <div className={className}>
    <Heading.M>{title}</Heading.M>
    <Standard.List {...listProps}>{children}</Standard.List>
  </div>
);

export const List = styled(Container)`
  flex-grow: 1;
  margin-right: ${({ theme }) => theme.spacing.page.gutter / 2}px;
  margin-left: ${({ theme }) => theme.spacing.page.gutter / 2}px;

  & ${Heading.M} {
    ${({ theme }) => theme.spacing.property('margin-bottom', 7)}
    padding-bottom: ${({ theme }) => theme.spacing.unit(2)};
    border-bottom: solid 1px ${({ theme }) => theme.palette.display.grey2};
    ${({ theme }) => theme.media.query('tablet')`
      padding-bottom: ${theme.spacing.unit(4)}
    `}
  }

  & ${Standard.List} {
    ${Standard.Item} {
      ${({ theme }) => theme.typography.size(16)}
      ${({ theme }) => theme.spacing.property('margin-bottom', 4)}

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

List.displayName = 'Navigation.List';

List.propTypes = {
  /** the title appearing above the list */
  title: PropTypes.string.isRequired,
  /** props passed through to the underlying list */
  listProps: PropTypes.shape,
};

List.defaultProps = {
  listProps: {},
};

export const Item = ({ children, ...props }) => (
  <Standard.Item {...props}>{children}</Standard.Item>
);

Item.displayName = 'Navigation.Item';
