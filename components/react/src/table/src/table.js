import styled from 'styled-components';
import PropTypes from 'prop-types';

const Table = styled.table`
  color: ${({ theme }) => theme.palette.common.text};
  ${({ theme }) => theme.typography.size(19)}
  width: 100%;
  ${({ theme }) => theme.spacing.property('margin-bottom', 6)}
  border-spacing: 0;
  border-collapse: collapse;
`;

Table.displayName = 'Table';

export default Table;
