import styled from 'styled-components';

const BackLink = styled.a`
  ${({ theme }) => theme.typography.common()} display: inline-block;
  position: relative;
  margin-top: ${({ theme }) => theme.spacing.unit(3)};
  margin-bottom: ${({ theme }) => theme.spacing.unit(3)};
  padding-left: 14px;
  border-bottom: solid 1px ${({ theme }) => theme.palette.display.black};
  text-decoration: none;

  &:before {
    content: '';
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: 0;
    margin: auto;
    ${({ theme }) => theme.helpers.arrow({ direction: 'left', base: 10 })};
  }

  &:link,
  &:visited,
  &:hover,
  &:active,
  &:focus {
    color: ${({ theme }) => theme.palette.common.text};
  }
`;

BackLink.displayName = 'BackLink';

BackLink.propTypes = {
  // muted: PropTypes.bool,
};

BackLink.defaultProps = {
  // muted: false,
};

export default BackLink;
