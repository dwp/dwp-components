import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';
import Marked from 'storybook-readme/components/Marked';

import { Tab, Tabs, TabList, TabPanel } from '..';

import Readme from '../README.md';

import { Paragraph } from '../../paragraph';

const stories = storiesOf('📑 Tabs', module);

const Frame = styled.div`
  margin: auto;
  width: 70%;
  max-width: 900px;
  min-width: 600px;
`;

const Story = styled.div`
  margin: 30px auto;
`;

stories.add('Tabs', () => (
  <Frame>
    <Marked md={Readme}/>
    <Story>
      <Tabs>
        <TabList>
          <Tab>Panel 1</Tab>
          <Tab>Panel 2</Tab>
          <Tab>Panel 3</Tab>
        </TabList>

        <TabPanel>
          <Paragraph.M>Panel 1 Content</Paragraph.M>
        </TabPanel>

        <TabPanel>
          <Paragraph.M>Panel 2 Content</Paragraph.M>
        </TabPanel>

        <TabPanel>
          <Paragraph.M>Panel 3 Content</Paragraph.M>
        </TabPanel>
      </Tabs>
    </Story>
  </Frame>
));
