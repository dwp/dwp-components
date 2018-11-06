import styled from 'styled-components';
import PropTypes from 'prop-types';

const crestWidth = 125;

const crestHeight = 102;

const Logo = styled.a`
  display: inline-block;
  color: #454a4c;
  min-width: ${crestWidth}px;
  padding-top: ${({ theme }) => parseInt(theme.spacing.unit(2), 10) + crestHeight}px;
  background-image: ${({ url }) => `url(${url})`};
  background-repeat: no-repeat;
  background-position: 50% 0%;
  background-size: ${crestWidth}px ${crestHeight}px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
`;

Logo.displayName = 'Footer.Logo';

Logo.propTypes = {
  /** The resolvable path to a hosted crest logo image */
  url: PropTypes.string.isRequired,
};

export default Logo;
