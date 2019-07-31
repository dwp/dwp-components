/* eslint-disable jsx-a11y/label-has-for */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Options = styled.div`
  display: flex;
  overflow: hidden;

  input {
    position: absolute !important;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    width: 1px;
    border: 0;
    overflow: hidden;
  }

  label {
    ${({ theme }) => theme.typography.body.m(false)};
    background-color: #fff;
    color: ${({ theme }) => theme.palette.display.blue};
    line-height: 1;
    text-align: center;
    padding: 8px 16px;
    margin-right: -1px;
    border: 1px solid ${({ theme }) => theme.palette.display.blue};
    transition: all 0.3s ease-in-out;
  }

  label:hover {
    cursor: pointer;
  }

  input:checked + label {
    background-color: ${({ theme }) => theme.palette.display.blue};
    color: ${({ theme }) => theme.palette.display.white};
  }
`;

const OptionsToggle = ({ options, onSelected }) => {
  const selectedOption = options.filter(({ selected }) => selected);
  const [seletedItem, setSeletedItem] = useState(
    selectedOption.length > 0 ? selectedOption[0].value : null
  );
  return (
    <Options>
      {options.map(({ text, value }) => (
        <React.Fragment key={value}>
          <input
            type="radio"
            id={value}
            name="switch-two"
            checked={value === seletedItem}
            onChange={() => {
              setSeletedItem(value);
              onSelected(value);
            }}
          />
          <label htmlFor={value}>{text}</label>
        </React.Fragment>
      ))}
    </Options>
  );
};
OptionsToggle.displayName = 'OptionsToggle';

OptionsToggle.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      selected: PropTypes.bool,
    })
  ).isRequired,
  onSelected: PropTypes.func.isRequired,
};
export default OptionsToggle;
