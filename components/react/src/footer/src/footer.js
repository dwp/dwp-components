import styled from 'styled-components';

import { Link } from '../../link';
import { List } from '../../list';

const Footer = styled.footer`
  ${({ theme }) => theme.typography.size(16)}
  ${({ theme }) => theme.spacing.property('padding-top', 7)}
  ${({ theme }) => theme.spacing.property('padding-bottom', 5)}
  background-color: ${({ theme }) => theme.palette.common.canvasBackground};
  border-top: solid 1px #a1acb2;
  color: #454a4c;

  & ${List.List} {
    ${({ theme }) => theme.typography.size(16)}
  }

  & ${Link} {
    ${({ theme }) => theme.helpers.focus()}

    &:link,
    &:visited {
      color: #454a4c;
    }

    &:hover,
    &:active {
      color: #171819;
    }

    &:focus {
      color: ${({ theme }) => theme.palette.common.focusText}
    }
  }
`;

Footer.displayName = 'Footer';

export default Footer;
