import styled from 'styled-components';
import PropTypes from 'prop-types';

const mutedStyle = ({ muted, theme }) => {
  if (muted) {
    return `
      &:link,
      &:visited,
      &:hover,
      &:active,
      &:focus {
        color: ${theme.palette.common.text};
      }
    `;
  }
  return null;
};

const Link = styled.a`
  color: ${({ theme }) => theme.palette.common.link};
  text-decoration: underline;

  ${({ theme }) => theme.typography.common()}

  &:link {
    color: ${({ theme }) => theme.palette.common.link};
  }

  &:visited {
    color: ${({ theme }) => theme.palette.common.linkVisited};
  }

  &:hover {
    color: ${({ theme }) => theme.palette.common.linkHover};
  }

  &:active {
    color: ${({ theme }) => theme.palette.common.linkActive};
  }

  &:focus {
    ${({ theme }) => theme.helpers.focus(true)}
    color: ${({ theme }) => theme.palette.common.text};
  }

  ${mutedStyle};
`;

Link.displayName = 'Link';

Link.propTypes = {
  muted: PropTypes.bool,
};

Link.defaultProps = {
  muted: false,
};

export default Link;
