import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';

import 'loki/configure-react';

import Theme from 'dwp-theme';

import { Global } from '../src'

const GlobalStyleDecorator = (storyFn) => (
  <Global theme={Theme}>
    {storyFn()}
  </Global>
);

// automatically import all files ending in *.stories.js from components
const req = require.context('../src', true, /.stories.js$/);

// import all other files which relate to the design system
const stories = require.context('../stories', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
  stories.keys().forEach(filename => stories(filename));
}

addDecorator(checkA11y);

addDecorator(GlobalStyleDecorator)

configure(loadStories, module);
