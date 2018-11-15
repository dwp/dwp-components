import styled from 'styled-components';

import Group from '../group';

import { checkboxPadding, checkboxSize } from './constants';

const attrs = {
  offsets: ({ theme }) => {
    const offsetSize = parseInt(checkboxSize({ theme }), 10);
    const offsetPadding = parseInt(checkboxPadding({ theme }), 10);
    const mobileBorder = theme.spacing.page.border.mobile / 2;
    const margin = -offsetSize + (offsetSize / 2 - mobileBorder);
    const padding = offsetSize / 2 - mobileBorder + offsetPadding;
    return { margin, padding };
  },
};

export default styled.div.attrs(attrs)`
  display: block;
  position: relative;
  clear: left;
  margin-bottom: ${({ theme }) => theme.spacing.unit(2)};
  min-height: ${checkboxSize};
  padding: 0 0 0 ${checkboxSize};

  &:last-child, &:last-of-type {
    margin-bottom: 0;
  }

  & > ${Group} {
    margin-top: ${({ theme }) => theme.spacing.unit(2)};
    ${({ theme }) => theme.spacing.property('margin-bottom', 4)}
    margin-left: ${({ offsets }) => offsets.margin}px;
    padding-left: ${({ offsets }) => offsets.padding}px;
    border-left-width: ${({ theme }) => theme.spacing.page.border.mobile}px;
    border-left-style: solid;
  }
`;
