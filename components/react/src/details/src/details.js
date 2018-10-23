import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Container from './container';
import Content from './content';
import Summary from './summary';
import Text from './text';

const Details = class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      revealed: false,
    };
  }

  toggleRevealed() {
    console.log('toggling');
    this.setState({
      revealed: !this.state.revealed,
    });
  }

  render() {
    const { revealed = false } = this.state;
    const { children, summary } = this.props;
    return (
      <Container>
        <Summary revealed={revealed} onClick={() => this.toggleRevealed()}>
          <Text>
            {summary}
          </Text>
        </Summary>
        {revealed ? (
          <Content>
            {children}
          </Content>
        ) : null}
      </Container>
    );
  }
}

Details.displayName = 'Details';

Details.propTypes = {
  children: PropTypes.node.isRequired,
  summary: PropTypes.string.isRequired,
};

export default Details;
