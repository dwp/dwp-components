import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Paragraph } from '../../../paragraph';

import Label from './label';
import Hint from './hint';
import Input from './input';
import Container from './container';

const Checkbox = class extends Component {
  constructor(props) {
    super(props);
    this.componentId = `${props.name}-${Number(new Date())}`;
    this.state = {
      checked: props.checked || false,
    };
  }

  handleClick() {
    this.setState(({ checked }) => ({
      checked: !checked,
    }));
  }

  render() {
    const { componentId: id } = this;
    const { checked } = this.state;
    const { name, label, hint, children, checked: isChecked, ...props } = this.props;
    const hintId = `${id}-item-hint`;
    return (
      <Container onClick={e => this.handleClick(e)}>
        <Input
          type="checkbox"
          checked={checked}
          id={id}
          {...props}
          aria-describedby={hint ? hintId : null}
        />
        <Paragraph.M as={Label} htmlFor={id}>
          {label}
        </Paragraph.M>
        {hint ? (
          <Paragraph.M as={Hint} id={hintId}>
            {hint}
          </Paragraph.M>
        ) : null}
        {checked ? children : null}
      </Container>
    );
  }
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
