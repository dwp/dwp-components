import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';

import { Link } from '..';
import { Paragraph } from '../../paragraph';

import LinkReadme from '../README.md';

const stories = storiesOf('⛓ Links', module);

stories.addDecorator(withReadme(LinkReadme));

const doc = `
  A link component expects a text node and has a "muted" property (described below).
`;

stories.add('Standard', withInfo(doc)(() => (
  <Paragraph.M>
    This is a standard paragraph <Link href="#">with a link</Link>.
  </Paragraph.M>
)));

stories.add('Muted', withInfo(doc)(() => (
  <Paragraph.M>
    This paragraph <Link muted href="#">contains a muted link</Link>.
  </Paragraph.M>
)));
