import styled from 'styled-components';

const HasError = ({ error, theme }) => {
  if (error) {
    return `
            padding-left: ${theme.spacing.unit(3)};
            border-left-color: ${theme.palette.common.error};
            border-left-style: solid;
            border-left-width: ${theme.spacing.form.group.border.error};
        `;
  }
  return null;
};

const Group = styled.div`
    ${({ theme }) => theme.spacing.property('margin-bottom', 6)}
    border-left-color: ${({ theme }) => theme.palette.common.border};
    
    &:last-of-type {
        margin-bottom: 0;
    }

    ${HasError}
`;

export default Group;
