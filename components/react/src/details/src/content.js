import styled from 'styled-components';

import { Paragraph } from '../../paragraph';

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.unit(3)};
  padding-left: ${({ theme }) => theme.spacing.unit(4)};
  border-left-width: ${({ theme }) => theme.spacing.page.border.desktop};
  border-left-color: ${({ theme }) => theme.palette.common.border};
  border-left-style: solid;

  & ${Paragraph.L}, & ${Paragraph.M}, & ${Paragraph.S}, & ${Paragraph.XS} {
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.spacing.unit(4)};

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

Content.displayName = 'Details.Content';

export default Content;
