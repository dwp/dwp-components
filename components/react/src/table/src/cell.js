import styled from 'styled-components';
import PropTypes from 'prop-types';

const IsNumeric = ({ numeric }) => {
  if (numeric) {
    return `
      text-align: right;
    `;
  }
  return null;
};

const IsTableHeader = ({ header }) => {
  if (header) {
    return `
      font-weight: 700;
    `;
  }
  return null;
};

const Cell = styled.td`
  border-bottom: solid 1px ${({ theme }) => theme.palette.common.border};
  padding-top: ${({ theme }) => theme.spacing.unit(2)};
  padding-right: ${({ theme }) => theme.spacing.unit(4)};
  padding-bottom: ${({ theme }) => theme.spacing.unit(2)};
  padding-left: 0;
  text-align: left;

  ${IsTableHeader} ${IsNumeric}

  &:last-child {
    padding-right: 0;
  }
`;

Cell.displayName = 'Table.Cell';

Cell.propTypes = {
  numeric: PropTypes.bool,
  header: PropTypes.bool,
};

Cell.defaultProps = {
  numeric: false,
  header: false,
};

export default Cell;
