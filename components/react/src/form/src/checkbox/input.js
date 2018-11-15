import styled from 'styled-components';

import { checkboxSize } from './constants';

import Group from '../group';

import Label from './label';

export default styled.input`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: ${checkboxSize};
  height: ${checkboxSize};
  cursor: pointer;
  margin: 0;
  opacity: 0;

  &:focus + ${Label}::before {
    ${({ theme }) => theme.helpers.focus()}
  }

  &:checked + ${Label}::after {
    opacity: 1;
  }

  &:disabled,
  &:disabled + ${Label} {
    cursor: default;
  }

  &:disabled + ${Label} {
    opacity: 0.5;
  }

  &:checked ~ ${Group} {
    display: block;
  }
`;
