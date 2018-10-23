import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  position: relative;
  padding-top: ${({ theme }) => theme.spacing.unit(2)};
  margin-bottom: -${({ theme }) => theme.spacing.unit(2)};
  border-bottom-width: ${({ theme }) => theme.spacing.unit(2)};
  border-bottom-style: solid;
  border-bottom-color: ${({ borderColor, theme }) => theme.palette.display[borderColor]};
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ theme }) => theme.spacing.page.width}px;
`;

Container.displayName = 'Header.Container';

Container.propTypes = {
  borderColor: PropTypes.string,
};

Container.defaultProps = {
  borderColor: 'blue',
};

export default Container;
