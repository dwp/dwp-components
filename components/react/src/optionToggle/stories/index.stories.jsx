import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import Readme from '../README.md';
import { OptionsToggle } from '..';

const stories = storiesOf('✌ Options Toggle', module);

stories.addDecorator(withReadme(Readme));

const doc = `Use this component to show multiple options toggle`;
const Frame = styled.div`
  margin: auto;
  width: 70%;
  max-width: 900px;
  min-width: 600px;
  padding-top: 50px;
`;
stories.add(
  'Basic',
  withInfo(doc)(() => (
    <Frame>
      <OptionsToggle
        options={[
          { text: 'One', value: '1' },
          { text: 'Two', value: '2' },
          { text: 'Three', value: '3' },
        ]}
        onSelected={action('item selected')}
      />
    </Frame>
  ))
);

stories.add(
  'Initial Seletion',
  withInfo(doc)(() => (
    <Frame>
      <OptionsToggle
        options={[
          { text: 'One', value: '1' },
          { text: 'Two', value: '2', selected: true },
          { text: 'Three', value: '3' },
        ]}
        onSelected={action('item selected')}
      />
    </Frame>
  ))
);
