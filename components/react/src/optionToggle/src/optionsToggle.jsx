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
    text-align: center;
    padding: 8px 16px;
    border-style: solid;
    border-color: ${({ theme }) => theme.palette.display.blue};
    border-width: 1px 0px 1px 1px;
    transition: all 0.3s ease-in-out;
  }

  label:last-child {
    border-right-width: 1px;
  }

  label {
    line-height: 22px !important;
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
            name="toggle-options"
            checked={value === seletedItem}
            onChange={() => {
              setSeletedItem(value);
              onSelected(value);
            }}
          />
          <label htmlFor={value} id={`options_${value}`}>
            {text}
          </label>
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
