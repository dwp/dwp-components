import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';

import { Heading } from '..';

import HeadingReadme from '../README.md';

const stories = storiesOf('📓 Headings', module);

stories.addDecorator(withReadme(HeadingReadme));

const doc = `
  The heading component expects a text node and has no component props.
`;

stories.add('Extra Large', withInfo(doc)(() => (
  <Heading.XL>GOV.UK XL Heading</Heading.XL>
)));

stories.add('Large', withInfo(doc)(() => (
  <Heading.L>GOV.UK L Heading</Heading.L>
)));

stories.add('Medium', withInfo(doc)(() => (
  <Heading.M>GOV.UK M Heading</Heading.M>
)));

stories.add('Small', withInfo(doc)(() => (
  <Heading.S>GOV.UK S Heading</Heading.S>
)));
