import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';

import { Loader } from '..';

import Readme from '../README.md';

const stories = storiesOf('📶 Loader', module);

stories.addDecorator(withReadme(Readme));

const doc = `
  Use this component when the user is awaiting asynchronous content on the client-side.
`;

stories.add('Basic', withInfo(doc)(() => (
  <Loader message="Loading content..."/>
)));
