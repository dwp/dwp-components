import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Container as ContentContainer } from '../../container';

const Container = styled(ContentContainer)`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  position: relative;
  padding-top: ${({ theme }) => theme.spacing.unit(2)};
  margin-bottom: -${({ theme }) => theme.spacing.unit(2)};
  border-bottom-width: ${({ theme }) => theme.spacing.unit(2)};
  border-bottom-style: solid;
  border-bottom-color: ${({ borderColor, theme }) => theme.palette.display[borderColor]};
`;

Container.displayName = 'Header.Container';

Container.propTypes = {
  borderColor: PropTypes.string,
};

Container.defaultProps = {
  borderColor: 'blue',
};

export default Container;
