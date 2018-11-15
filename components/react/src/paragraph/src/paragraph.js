import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Heading } from '../../heading';

const InsetStyle = ({ inset, theme }) => {
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
  return null;
};

const Common = styled.p`
  margin-top: 0;
  ${({ theme }) => theme.spacing.property('margin-bottom', 4)}
  color: ${({ theme }) => theme.palette.common.text};

  ${InsetStyle}
`;

Common.propTypes = {
  inset: PropTypes.bool,
  bold: PropTypes.bool,
};

Common.defaultProps = {
  inset: false,
  bold: false,
};

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
  ${({ bold, theme }) => theme.typography.body.l(bold)}
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
  ${({ bold = true, theme }) => theme.typography.body.m(bold)};
`;

M.displayName = 'Paragraph.M';

export const S = styled(ResponsiveCommon)`
  ${({ bold, theme }) => theme.typography.body.s(bold)};
`;

S.displayName = 'Paragraph.S';

export const XS = styled(Common)`
  ${({ bold, theme }) => theme.typography.body.xs(bold)};
`;

XS.displayName = 'Paragraph.XS';
