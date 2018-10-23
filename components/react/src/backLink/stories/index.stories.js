import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';

import { BackLink } from '..';

import LinkReadme from '../README.md';

const stories = storiesOf('🔙 Back Link', module);

stories.addDecorator(withReadme(LinkReadme));

const doc = `
  A back link component expects a text node
`;

stories.add('Standard', withInfo(doc)(() => (
  <BackLink href="#">Back</BackLink>
)));
