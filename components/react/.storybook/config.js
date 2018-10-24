import React from 'react';
import styled from 'styled-components';
import { configure, addDecorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import { withThemes } from 'storybook-styled-components';

const Theme = require('theme');

const GlobalStyle = createGlobalStyle`
  ${Theme.media.fontFace('fonts')}
`;

const GlobalStyleDecorator = (storyFn) => (
  <React.Fragment>
    <GlobalStyle />
    {storyFn()}
  </React.Fragment>
);

// automatically import all files ending in *.stories.js from components
const req = require.context('../src', true, /.stories.js$/);

// import all other files which relate to the design system
const stories = require.context('../stories', true, /.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
  stories.keys().forEach(filename => stories(filename));
}

addDecorator(withThemes({ theme: Theme }));

addDecorator(GlobalStyleDecorator)

configure(loadStories, module);
