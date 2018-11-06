import styled from 'styled-components';
import { TabPanel } from 'react-tabs';

export default styled(TabPanel)`
  display: none;
  margin: 0;

  &.selected {
    display: block;
    background-color: ${({ theme }) => theme.palette.display.white};
    border: solid 1px ${({ theme }) => theme.palette.common.border};
    border-top: none;
    margin: 0;
    padding: 15px;
  }
`;
