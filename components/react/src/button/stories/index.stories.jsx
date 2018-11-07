import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';

import { Button } from '..';

import ButtonReadme from '../README.md';

const stories = storiesOf('🔘 Buttons', module);

stories.addDecorator(withReadme(ButtonReadme));

const iconPath = 'images/icon-pointer.png';

const doc = `
  A button component expects a text node and a type property, which defaults to "default"
`;

stories.add('Default', withInfo(doc)(() => <Button>Click here</Button>));

stories.add('With an Icon', withInfo(doc)(() => <Button icon={iconPath}>Click here</Button>));

stories.add('Disabled', withInfo(doc)(() => <Button disabled>Click here</Button>));

stories.add(
  'As a link',
  withInfo(doc)(() => (
    <Button as="a" href="#">
      Click here
    </Button>
  ))
);
