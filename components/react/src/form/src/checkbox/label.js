import styled from 'styled-components';

import Label from '../label';

import { checkboxSize, checkboxPadding } from './constants';

export default styled(Label)`
  display: inline-block;
  margin-bottom: 0;
  padding: 8px ${checkboxPadding} ${({ theme }) => theme.spacing.unit(1)};
  cursor: pointer;
  -ms-touch-action: manipulation;
  touch-action: manipulation;

  &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    width: ${checkboxSize};
    height: ${checkboxSize};
    border-width: ${({ theme }) => theme.spacing.form.element.border.default};
    border-style: solid;
    border-color: currentColor;
    background: transparent;
  }

  &::after {
    content: '';
    position: absolute;
    top: 12px;
    left: 9px;
    width: 18px;
    height: 7px;
    transform: rotate(-45deg);
    border: solid;
    border-top-width: 0;
    border-right-width: 0;
    border-bottom-width: ${({ theme }) => theme.spacing.form.element.border.default};
    border-right-width: ${({ theme }) => theme.spacing.form.element.border.default};
    border-top-color: transparent;
    opacity: 0;
    background: transparent;
  }
`;
