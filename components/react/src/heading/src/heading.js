import styled from 'styled-components';

const common = ({ theme }) => `
  color: ${theme.palette.common.text};
  display: block;
  margin-top: 0;
`;

export const XL = styled.h1`
  ${({ theme }) => theme.typography.headings.xl()}
  ${({ theme }) => theme.spacing.property('margin-bottom', 8)}
  ${common}
`;

XL.displayName = 'Heading.XL';

export const L = styled.h2`
  ${({ theme }) => theme.typography.headings.l()}
  ${({ theme }) => theme.spacing.property('margin-bottom', 6)}
  ${common}
`;

L.displayName = 'Heading.L';

export const M = styled.h3`
  ${({ theme }) => theme.typography.headings.m()}
  ${({ theme }) => theme.spacing.property('margin-bottom', 4)}
  ${common}
`;

M.displayName = 'Heading.M';

export const S = styled.h4`
  ${({ theme }) => theme.typography.headings.s()}
  ${({ theme }) => theme.spacing.property('margin-bottom', 4)}
  ${common}
`;

S.displayName = 'Heading.S';
