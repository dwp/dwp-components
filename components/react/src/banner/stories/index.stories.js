import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';

import { Banner } from '..';
import { Tag } from '../../tag';
import { Link } from '../../link';
import { Paragraph } from '../../paragraph';
import { Header, Logo } from '../../header';

import PhaseBannerReadme from '../README.md';

const stories = storiesOf('🔤 Phase Banner', module);

stories.addDecorator(withReadme(PhaseBannerReadme));

const doc = `
  You can use the the ~<Banner>~ components to show users your service is still being worked on.
`;

stories.add('Alpha', withInfo(doc)(() => (
  <React.Fragment>
    <Header>
      <Logo>
        <img alt="Logo" aria-label="Department for Work and Pensions" src="/dwp.png" />
      </Logo>
    </Header>
    <Banner>
      <Tag>alpha</Tag>
      <Paragraph.S>
        This is a new service – your <Link href="#">feedback</Link> will help us to improve it.
      </Paragraph.S>
    </Banner>
  </React.Fragment>
)));
