import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';

import { Caption } from '..';
import { Heading } from '../../heading';

import CaptionReadme from '../README.md';

const stories = storiesOf('🤔 Captions', module);

stories.addDecorator(withReadme(CaptionReadme));

const doc = `
  A caption component expects a text node and has no component props.
`;

stories.add(
  'Extra Large',
  withInfo(doc)(() => (
    <div>
      <Caption.XL>An Extra Large Caption</Caption.XL>
      <Heading.XL>GOV.UK XL Heading</Heading.XL>
    </div>
  ))
);

stories.add(
  'Large',
  withInfo(doc)(() => (
    <div>
      <Caption.L>A Large Caption</Caption.L>
      <Heading.L>GOV.UK L Heading</Heading.L>
    </div>
  ))
);

stories.add(
  'Medium',
  withInfo(doc)(() => (
    <div>
      <Caption.M>A Medium Caption</Caption.M>
      <Heading.M>GOV.UK M Heading</Heading.M>
    </div>
  ))
);
