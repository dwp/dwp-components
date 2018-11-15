import styled from 'styled-components';
import PropTypes from 'prop-types';

const HasError = ({ error, theme }) => {
  if (error) {
    return `
      padding-left: ${theme.spacing.unit(3)};
      border-color: ${theme.palette.common.error};
    `;
  }
  return null;
};

const Widths = {
  30: 59,
  20: 41,
  10: 23,
  5: 10.8,
  4: 9,
  3: 7.2,
  2: 5.4,
};

const WithWidth = ({ width = -1 }) => {
  const { [parseInt(width, 10)]: num } = Widths;
  if (num) {
    return `
      max-width: ${num}ex;
    `;
  }
  return null;
};

const Input = styled.input`
  ${({ theme }) => theme.typography.size(19)}
  ${({ theme }) =>
    theme.helpers.focus()}
  box-sizing: border-box;
  width: 100%;
  height: auto;
  margin-top: 0;
  padding: ${({ theme }) => theme.spacing.unit(1)};
  border-color: ${({ theme }) => theme.palette.common.inputBorder};
  border-style: solid;
  border-width: ${({ theme }) => theme.spacing.form.element.border.default}px;
  border-radius: 0;
  appearance: none;
  resize: vertical;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }

  ${WithWidth}

  ${HasError}
`;

Input.propTypes = {
  width: PropTypes.oneOf(Object.keys(Widths)),
  error: PropTypes.bool,
};

Input.defaultProps = {
  width: -1,
  error: false,
};

export default Input;
