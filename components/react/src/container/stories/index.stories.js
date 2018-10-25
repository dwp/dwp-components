import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';

import { Container } from '..';

import { Paragraph } from '../../paragraph';

import ContainerReadme from '../README.md';

const stories = storiesOf('📦 Container', module);

stories.addDecorator(withReadme(ContainerReadme));

const doc = `
 Test
`;

stories.add('Basic', withInfo(doc)(() => (
  <Container>
    <Paragraph.M>This paragraph has a maximum content width</Paragraph.M>
  </Container>
)));
