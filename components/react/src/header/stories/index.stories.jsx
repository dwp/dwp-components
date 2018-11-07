import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';

import { Link } from '../../link';
import { Header, Logo, Navigation } from '..';
import { Container } from '../../container';
import { Heading } from '../../heading';

import HeaderReadme from '../README.md';

const stories = storiesOf('🗣 Header', module);

stories.addDecorator(withReadme(HeaderReadme));

const doc = `
  The GOV.UK header shows users that they are on GOV.UK and which service they are using.
`;

stories.add(
  'Default',
  withInfo(doc)(() => (
    <React.Fragment>
      <Header>
        <Logo href="#" name="GOV.UK" fallback="/images/govuk-logotype-crown.png" />
      </Header>
      <Container>
        <Heading.XL>Service Name</Heading.XL>
      </Container>
    </React.Fragment>
  ))
);

stories.add(
  'With Navigation',
  withInfo(doc)(() => (
    <Header>
      <Logo href="#" name="GOV.UK" fallback="/images/govuk-logotype-crown.png" />
      <Navigation.Container>
        <Navigation.Name href="#">Service Name</Navigation.Name>
        <Navigation.Menu>
          <Navigation.Item active>
            <Link href="#">Navigation Item 1</Link>
          </Navigation.Item>
          <Navigation.Item>
            <Link href="#">Navigation Item 2</Link>
          </Navigation.Item>
          <Navigation.Item>
            <Link href="#">Navigation Item 3</Link>
          </Navigation.Item>
        </Navigation.Menu>
      </Navigation.Container>
    </Header>
  ))
);

stories.add(
  'Department Logo',
  withInfo(doc)(() => (
    <Header>
      <Logo>
        <img alt="Logo" aria-label="Department for Work and Pensions" src="/dwp.png" />
      </Logo>
    </Header>
  ))
);

stories.add(
  'Department Logo & Navigation',
  withInfo(doc)(() => (
    <Header>
      <Logo>
        <img alt="Logo" aria-label="Department for Work and Pensions" src="/dwp.png" />
      </Logo>
      <Navigation.Container>
        <Navigation.Name href="#">Service Name</Navigation.Name>
        <Navigation.Menu>
          <Navigation.Item active>
            <Link href="#">Navigation Item 1</Link>
          </Navigation.Item>
          <Navigation.Item>
            <Link href="#">Navigation Item 2</Link>
          </Navigation.Item>
          <Navigation.Item>
            <Link href="#">Navigation Item 3</Link>
          </Navigation.Item>
        </Navigation.Menu>
      </Navigation.Container>
    </Header>
  ))
);
