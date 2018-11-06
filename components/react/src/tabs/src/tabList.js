import styled from 'styled-components';
import { TabList } from 'react-tabs';

export default styled(TabList)`
  display: flex;
  flex-direction: row;
  align-items: left;
  border-bottom: solid 1px ${({ theme }) => theme.palette.common.border};
  margin: 0;
  padding: 0;
  list-style: none;
`;
