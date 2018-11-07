import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconStyle = ({ icon, theme }) => {
  if (typeof icon === 'string' && icon.length > 0) {
    return `
      ${theme.typography.size(24, true)}
      min-height: auto;
      padding-top: ${theme.spacing.unit(2, 'tablet')};
      padding-right: ${theme.spacing.unit(7, 'tablet')};
      padding-bottom: ${theme.spacing.unit(2, 'tablet')};
      padding-left: ${theme.spacing.unit(3, 'tablet')};
      background-image: url(${icon});
      background-repeat: no-repeat;
      background-position: 100% 50%;
    `;
  }
  return null;
};

const Button = styled.button`
  ${({ theme }) => theme.typography.size(19)}
  line-height: 0.85 !important;
  box-sizing: border-box;
  display: inline-block;
  position: relative;
  width: 100%;
  margin-top: 0;
  ${({ theme }) => theme.spacing.property('margin-bottom', 6)}
  padding: ${({ theme }) => theme.spacing.unit(2)};
  border: ${({ theme }) => theme.spacing.form.element.border.default}px solid transparent;
  border-bottom: 0;
  border-radius: 0;
  background-color: ${({ type, theme }) => theme.palette.buttons[type].background};
  box-shadow: 0 ${({ theme }) => theme.spacing.form.element.border.default}px 0 ${({
  type,
  theme,
}) => theme.palette.buttons[type].shadow};
  text-align: center;
  vertical-align: top;
  cursor: pointer;
  -webkit-appearance: none;

  ${({ theme }) => theme.media.query('tablet')`
    width: auto;
  `}

  &:active {
    top: ${({ theme }) => theme.spacing.form.element.border.default}px;
    box-shadow: none;
  }

  &,
  &:link,
  &:visited,
  &:active,
  &:hover {
    color: ${({ type, theme }) => theme.palette.buttons[type].text};
    text-decoration: none;
  }

  &::-moz-focus-inner {
    padding: 0;
    border: 0;
  }

  &:hover,
  &:focus {
    background-color: ${({ type, theme }) => theme.palette.buttons[type].hover};
  }

  &[disabled="disabled"],
  &[disabled] {
    opacity: .5;

    &:hover {
      background-color: ${({ type, theme }) => theme.palette.buttons[type].background};
      cursor: default;
    }

    &:focus {
      outline: none;
    }

    &:active {
      top: 0;
      box-shadow: 0 ${({ theme }) => theme.spacing.form.element.border.default}px 0 ${({
  type,
  theme,
}) => theme.palette.buttons[type].shadow};
    }
  }

  ${IconStyle}
`;

Button.displayName = 'Button';

Button.propTypes = {
  type: PropTypes.oneOf(['default']),
  icon: PropTypes.string,
};

Button.defaultProps = {
  type: 'default',
  icon: null,
};

export default Button;
