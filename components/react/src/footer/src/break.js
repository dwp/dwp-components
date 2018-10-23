import styled from 'styled-components';

const Break = styled.hr`
  margin: 0 auto;
  border: 0;
  max-width: ${({ theme }) => theme.spacing.page.width}px;
  ${({ theme }) => theme.spacing.property('margin-bottom', 8)}
  border-bottom: solid 1px ${({ theme }) => theme.palette.display.grey2};
`;

Break.displayName = 'Section.Break';

export default Break;
