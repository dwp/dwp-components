import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';

import { Skip } from '..';

import { Paragraph } from '../../paragraph';

import SkipReadme from '../README.md';

const stories = storiesOf('⏩ Skip Link', module);

stories.addDecorator(withReadme(SkipReadme));

const doc = `
  A caption component expects a text node and has no component props.
`;

stories.add('Link', withInfo(doc)(() => (
  <React.Fragment>
    <Skip href="#">Skip to main content</Skip>
    <Paragraph.M>Tab to reveal the Skip component</Paragraph.M>
  </React.Fragment>
)));
