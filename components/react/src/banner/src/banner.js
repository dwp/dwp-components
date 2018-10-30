import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container } from '../../container';
import { Tag } from '../../tag';
import { Paragraph } from '../../paragraph';

// const Component = ({ className, children }) => (
//   <div className={className}>
//     <Content>
//       {children}
//     </Content>
//   </div>
// )

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

Banner.propTypes = {
  // visible: PropTypes.bool,
};

Banner.defaultProps= {
  // visible: false,
};

export default Banner;
