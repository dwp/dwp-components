import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Crown from './crown';

const Logo = styled.div`
  min-width: 33.33%;
  width: 33.33%;
  padding-right: 0;
`;

const Link = styled.a`
  text-decoration: none;
  display: inline-flex;
  ${({ theme }) => theme.typography.common()}
  font-size: 30px;
  line-height: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.display.white};

  &:link,
  &:visited {
    text-decoration: none;
  }

  &:hover,
  &:active {
    margin-bottom: -1px;
    border-bottom: 1px solid;
  }

  &:focus {
    ${({ theme }) => theme.helpers.focus(true)}
    color: ${({ theme }) => theme.palette.common.text};
  }
`;

const LogoComponent = ({ children, href, name, fallback }) => {
  if (children) {
    return <Logo>{children}</Logo>;
  }
  return (
    <Logo>
      <Link href={href}>
        <Crown fallback={fallback} />
        {typeof name === 'string' && name.length > 0 ? <span>{name}</span> : null}
      </Link>
    </Logo>
  );
};

LogoComponent.displayName = 'Header.Logo';

LogoComponent.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  name: PropTypes.string,
};

LogoComponent.defaultProps = {
  href: '#',
  name: 'GOV.UK'
};

export default LogoComponent;
