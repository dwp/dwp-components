import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';

import { Warning } from '..';

import WarningReadme from '../README.md';

const stories = storiesOf('⚠️ Warning Text', module);

stories.addDecorator(withReadme(WarningReadme));

const doc = `
  A warning message with a customisable text-based icon, defaults to an exclamation mark.
`;

stories.add('Exclamation Mark', withInfo(doc)(() => (
  <Warning>You can be fined up to if you don’t register.</Warning>
)));

stories.add('Question Mark', withInfo(doc)(() => (
  <Warning icon="?" assistiveText="Question">Have you checked your bank account details?</Warning>
)));
