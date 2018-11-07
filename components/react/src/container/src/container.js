import styled from 'styled-components';
import PropTypes from 'prop-types';

const passthrough = (...all) => all;

const IsLead = ({ lead, theme }) => {
  if (lead) {
    return theme.spacing.property('margin-top', 6);
  }
  return null;
};

const Component = passthrough`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: ${({ theme }) => theme.spacing.page.width}px;

  ${IsLead}
`;

const Container = styled.div(...Component);

Container.displayName = 'Container';

Container.propTypes = {
  lead: PropTypes.bool,
};

Container.defaultProps = {
  lead: false,
};

export default Container;
