import styled from 'styled-components';
import PropTypes from 'prop-types';

const IsVisible = ({ visible, theme }) => {
  if (visible) {
    return `
      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-bottom-color: ${theme.palette.common.border};
    `;
  }
}

const Common = styled.hr`
  margin: 0;
  border: 0;
  ${IsVisible}
`;

Common.displayName = 'Common';

Common.propTypes = {
  visible: PropTypes.bool,
};

Common.defaultProps= {
  visible: false,
};

export const XL = styled(Common)`
  ${({ theme }) => theme.spacing.property('margin', { top: 8, bottom: 8 })}
`;

XL.displayName = 'Break.XL';

export const L = styled(Common)`
  ${({ theme }) => theme.spacing.property('margin', { top: 6, bottom: 6 })}
`;

L.displayName = 'Break.L';

export const M = styled(Common)`
  ${({ theme }) => theme.spacing.property('margin', { top: 4, bottom: 4 })}
`;

M.displayName = 'Break.M';
