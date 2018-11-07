import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';

import { Paragraph } from '..';
import { Caption } from '../../caption';
import { Heading } from '../../heading';

import ParagraphReadme from '../README.md';

const stories = storiesOf('📖 Paragraphs', module);

stories.addDecorator(withReadme(ParagraphReadme));

const doc = `
  A paragraph component expects a text node and has no component props.
`;

const lorem = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  cupidatat non proident, sunt in culpa qui officia deserunt mollit
  anim id est laborum.
`;

stories.add(
  'Lead',
  withInfo(doc)(() => (
    <div>
      <Caption.L>A Large Caption</Caption.L>
      <Heading.L>GOV.UK L Heading</Heading.L>
      <Paragraph.L>{lorem}</Paragraph.L>
    </div>
  ))
);

stories.add(
  'Standard',
  withInfo(doc)(() => (
    <div>
      <Caption.M>A Medium Caption</Caption.M>
      <Heading.M>GOV.UK M Heading</Heading.M>
      <Paragraph.M>{lorem}</Paragraph.M>
    </div>
  ))
);

stories.add(
  'Inset',
  withInfo(doc)(() => (
    <div>
      <Caption.M>A Medium Caption</Caption.M>
      <Heading.M>GOV.UK M Heading</Heading.M>
      <Paragraph.M>{lorem}</Paragraph.M>
      <Paragraph.M inset>{lorem}</Paragraph.M>
      <Paragraph.M>{lorem}</Paragraph.M>
    </div>
  ))
);

stories.add(
  'Small',
  withInfo(doc)(() => (
    <div>
      <Heading.S>GOV.UK S Heading</Heading.S>
      <Paragraph.S>{lorem}</Paragraph.S>
    </div>
  ))
);

stories.add('Extra Small', withInfo(doc)(() => <Paragraph.XS>{lorem}</Paragraph.XS>));
