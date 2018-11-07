import styled from 'styled-components';
import PropTypes from 'prop-types';

const Tag = styled.strong`
  color: ${({ theme }) => theme.palette.display.white};
  ${({ theme }) => theme.typography.size(14, true)} display: inline-block;
  line-height: 1.25;
  padding: 4px 8px 1px 8px;
  outline: solid 2px transparent;
  outline-offset: -2px;
  background-color: ${({ background, theme }) => theme.palette.display[background]};
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
`;

Tag.displayName = 'Tag';

Tag.propTypes = {
  background: PropTypes.string,
};

Tag.defaultProps = {
  background: 'blue',
};

export default Tag;
