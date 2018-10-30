import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Bar from './bar';
import Indeterminate from './indeterminate';

import { Paragraph } from '../../paragraph';

const Message = styled(Paragraph.M)`
  text-align: center;
`;

Message.displayName = 'Loader.Message';

const Loader = ({ color, message }) => (
  <div>
    <Message>{message}</Message>
    <Bar>
      <Indeterminate color={color} />
    </Bar>
  </div>
);

Loader.displayName = 'Loader';

Loader.propTypes = {
  message: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Loader.defaultProps= {
  color: 'blue',
};

export default Loader;
