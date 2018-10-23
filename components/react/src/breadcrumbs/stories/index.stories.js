import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';

import { Breadcrumbs } from '..';
import { Link } from '../../link';

import LinkReadme from '../README.md';

const stories = storiesOf('🍞 Breadcrumbs', module);

stories.addDecorator(withReadme(LinkReadme));

const doc = `
  The breadcrumbs component helps users to understand where they are within a website’s structure and move between levels.
  You can use the "size" and "border" attributes to determine the size and attitude of the arrows between the breadcrumbs.
`;

stories.add('Standard', withInfo(doc)(() => (
  <Breadcrumbs.Container>
    <Breadcrumbs.Item>
      <Link href="#">Home</Link>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item>
      <Link href="#">Passports, travel and living abroad</Link>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item aria-current="page">
      Travel abroad
    </Breadcrumbs.Item>
  </Breadcrumbs.Container>
)));
