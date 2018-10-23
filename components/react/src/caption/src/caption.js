import styled from 'styled-components';

const Common = styled.span`
  display: block;
  color: ${({ theme }) => theme.palette.common.secondaryText};
`;

export const XL = styled(Common)`
  ${({ theme }) => theme.typography.captions.xl()}
  margin-bottom: ${({ theme }) => theme.spacing.unit(1)};
`;

XL.displayName = 'Caption.XL';

export const L = styled(Common)`
  ${({ theme }) => theme.typography.captions.l()}
  margin-bottom: ${({ theme }) => theme.spacing.unit(1)};

  ${({ theme }) => theme.media.query('tablet')`
    margin-bottom: 0;
  `}
`;

L.displayName = 'Caption.L';

export const M = styled(Common)`
  ${({ theme }) => theme.typography.captions.m()};
`;

M.displayName = 'Caption.M';
