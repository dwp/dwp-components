import styled from 'styled-components';
import { Tab } from 'react-tabs';

export default styled(Tab)`
  padding: 10px 20px;
  margin: 5px 0px 5px 5px;
  background-color: ${({ theme }) => theme.palette.display.grey4};
  cursor: pointer;
  text-align: center;
  text-decoration: none;

  &:first-child {
    margin-left: 0px;
  }

  &.selected {
    margin-top: 0px;
    margin-bottom: -1px;
    padding: 14px 19px 16px;
    border: solid 1px ${({ theme }) => theme.palette.common.border};
    border-bottom: 0;
    background-color: ${({ theme }) => theme.palette.display.white};
  }
`;
