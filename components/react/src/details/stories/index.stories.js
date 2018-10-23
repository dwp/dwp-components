import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';

import { Details } from '..';
import { Paragraph } from '../../paragraph';

import DetailsReadme from '../README.md';

const stories = storiesOf('🔍 Details', module);

stories.addDecorator(withReadme(DetailsReadme));

const doc = `
  Make a page easier to scan by letting users reveal more detailed information only if they need it.
`;

stories.add('Standard', withInfo(doc)(() => (
  <Details summary="Help with nationality">
    <Paragraph.M>
      We need to know your nationality so we can work out which elections
      you’re entitled to vote in. If you can’t provide your nationality,
      you’ll have to send copies of identity documents through the post.
    </Paragraph.M>
  </Details>
)));
