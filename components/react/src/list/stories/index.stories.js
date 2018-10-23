import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';

import { List } from '..';
import { Link } from '../../link';
import { Paragraph } from '../../paragraph';

import ListReadme from '../README.md';

const stories = storiesOf('📋 Lists', module);

stories.addDecorator(withReadme(ListReadme));

const doc = `
  A list component expects one or more list item components
`;

stories.add('Unordered', withInfo(doc)(() => (
  <List.List>
    <List.Item>
      David
    </List.Item>
    <List.Item>
      <Link href="#">Thomas</Link>
    </List.Item>
    <List.Item>
      Jack
    </List.Item>
    <List.Item>
      Daniel
    </List.Item>
  </List.List>
)));

stories.add('Bulleted', withInfo(doc)(() => (
  <div>
    <Paragraph.M>The fruits I enjoy the most are:</Paragraph.M>
    <List.List bullet>
      <List.Item>
        apples
      </List.Item>
      <List.Item>
        oranges
      </List.Item>
      <List.Item>
        bananas
      </List.Item>
      <List.Item>
        pears
      </List.Item>
    </List.List>
  </div>
)));

stories.add('Numerical', withInfo(doc)(() => (
  <List.List numerical>
    <List.Item>
      Confirm Order.
    </List.Item>
    <List.Item>
      Delivery Address.
    </List.Item>
    <List.Item>
      Payment.
    </List.Item>
    <List.Item>
      Confirmation.
    </List.Item>
  </List.List>
)));

stories.add('Columns', withInfo(doc)(() => (
  <List.List columns="2">
    <List.Item>
      David
    </List.Item>
    <List.Item>
      <Link href="#">Thomas</Link>
    </List.Item>
    <List.Item>
      Jack
    </List.Item>
    <List.Item>
      Daniel
    </List.Item>
  </List.List>
)));
