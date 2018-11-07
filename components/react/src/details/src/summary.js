import styled from 'styled-components';
import PropTypes from 'prop-types';

const Summary = styled.summary`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.unit(2)};
  padding-left: ${({ theme }) =>
    parseInt(theme.spacing.unit(4), 10) + parseInt(theme.spacing.page.border.desktop, 10)}px;
  color: ${({ theme }) => theme.palette.common.link};
  cursor: pointer;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.palette.common.linkHover};
  }

  &:focus {
    outline-style: solid;
    outline-width: ${({ theme }) => parseInt(theme.spacing.page.focus, 10) + 1}px;
    outline-color: ${({ theme }) => theme.palette.common.focus};
    outline-offset: -1px;
    color: ${({ theme }) => theme.palette.common.focusText};
    background: ${({ theme }) => theme.palette.common.focus};
  }

  &::-webkit-details-marker {
    display: none;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    ${({ revealed, theme }) =>
      theme.helpers.arrow({ direction: revealed ? 'down' : 'right', base: 14 })};
  }
`;

Summary.displayName = 'Details.Summary';

Summary.propTypes = {
  revealed: PropTypes.bool,
};

Summary.defaultProps = {
  revealed: false,
};

export default Summary;
