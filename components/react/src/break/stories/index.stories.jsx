import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';

import { Break } from '..';

import BreakReadme from '../README.md';

const stories = storiesOf('📑 Section Break', module);

stories.addDecorator(withReadme(BreakReadme));

const doc = `
  You can use the the ~<Break.#>~ components to create a thematic break between sections of content.
`;

stories.add(
  'Standard',
  withInfo(doc)(() => (
    <React.Fragment>
      <Break.XL visible />
      <Break.L visible />
      <Break.M visible />
    </React.Fragment>
  ))
);
