import styled from 'styled-components';

import { Container } from '../../container';
import { Tag } from '../../tag';
import { Paragraph } from '../../paragraph';

const Banner = styled(Container)`
  display: flex;
  align-items: baseline;
  padding-top: ${({ theme }) => theme.spacing.unit(2)};
  padding-bottom: ${({ theme }) => theme.spacing.unit(2)};
  border-bottom: solid 1px ${({ theme }) => theme.palette.display.border};
  ${({ theme }) => theme.typography.common()}

  & ${Tag} {
    margin-right: ${({ theme }) => theme.spacing.unit(2)};
  }

  & ${Paragraph.S} {
    margin-bottom: 0;
  }
`;

Banner.displayName = 'Banner';

export default Banner;
