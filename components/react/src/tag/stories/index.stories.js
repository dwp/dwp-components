import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';

import { Tag } from '..';

import TagReadme from '../README.md';

const stories = storiesOf('🏷 Tag', module);

stories.addDecorator(withReadme(TagReadme));

const doc = `
  A small highlighted piece of text. By default, the background is "blue".
`;

stories.add('Blue', withInfo(doc)(() => (
  <Tag>alpha</Tag>
)));

stories.add('Inactive', withInfo(doc)(() => (
  <Tag background="grey-1">alpha</Tag>
)));
