import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Heading } from '../../heading';

const InsetStyle = ({ inset, theme }) => {
  console.log(theme);
  if (inset) {
    return `
      padding: ${theme.spacing.unit(3)};
      ${theme.spacing.property('margin', { top: 6, bottom: 6 })}
      clear: both;
      border-left-width: ${theme.spacing.page.border.wide}px;
      border-left-style: solid;
      border-left-color: ${theme.palette.common.border};

      :first-child {
        margin-top: 0;
      }

      :only-child,
      :last-child {
        margin-bottom: 0;
      }
    `;
  }
};

const Common = styled.p`
  margin-top: 0;
  ${({ theme }) => theme.spacing.property('margin-bottom', 4)}
  color: ${({ theme }) => theme.palette.common.text};

  ${InsetStyle}
`;

Common.propTypes = {
  inset: PropTypes.bool,
};

Common.defaultProps = {
  inset: false,
}

const ResponsiveCommon = styled(Common)`
  & + ${Heading.L} {
    ${({ theme }) => theme.spacing.property('padding-top', 4)};
  }

  & + ${Heading.M}, & + ${Heading.S} {
    padding-top: ${({ theme }) => theme.spacing.unit(1)};

    ${({ theme }) => theme.media.query('tablet', theme)`
      padding-top: ${({ spacing }) => spacing.unit(2)};
    `};
  }
`;

export const L = styled(Common)`
  ${({ theme }) => theme.typography.body.l()}
  ${({ theme }) => theme.spacing.property('margin-bottom', 6)}

  & + ${Heading.L} {
    padding-top: ${({ theme }) => theme.spacing.unit(1)};

    ${({ theme }) => theme.media.query('tablet', theme)`
      padding-top: ${({ spacing }) => spacing.unit(2)};
    `}
  }
`;

L.displayName = 'Paragraph.L';

export const M = styled(ResponsiveCommon)`
  ${({ theme }) => theme.typography.body.m()};
`;

M.displayName = 'Paragraph.M';

export const S = styled(ResponsiveCommon)`
  ${({ theme }) => theme.typography.body.s()};
`;

S.displayName = 'Paragraph.S';

export const XS = styled(Common)`
  ${({ theme }) => theme.typography.body.xs()};
`;

XS.displayName = 'Paragraph.XS';
