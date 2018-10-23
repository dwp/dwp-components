import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';

import { Footer, Section, Navigation, Break, Meta } from '..';
import { List } from '../../list';
import { Link } from '../../link';

import FooterReadme from '../README.md';

const stories = storiesOf('🐾 Footer', module);

const crestUrlPath = '/images/govuk-crest-2x.png';

stories.addDecorator(withReadme(FooterReadme));

const doc = `
  A footer.
`;

stories.add('Standard', withInfo(doc)(() => (
  <Footer>
    <Meta logoProps={{ url: crestUrlPath }}>
      <Meta.License/>
    </Meta>
  </Footer>
)));

stories.add('Crest Only', withInfo(doc)(() => (
  <Footer>
    <Meta logoProps={{ url: crestUrlPath }} />
  </Footer>
)));

stories.add('Meta Links', withInfo(doc)(() => (
  <Footer>
    <Meta logoProps={{ url: crestUrlPath }}>
      <List.List inline>
        <List.Item>
          <Link href="#">Help</Link>
        </List.Item>
        <List.Item>
          <Link href="#">Cookies</Link>
        </List.Item>
        <List.Item>
          <Link href="#">Contact</Link>
        </List.Item>
        <List.Item>
          <Link href="#">Terms and conditions</Link>
        </List.Item>
        <List.Item>
          <Link href="#">Rhestr o Wasanaethau Cymraeg</Link>
        </List.Item>
      </List.List>
      <Meta.Text>
        Designed by the <Link href="#">GDS team</Link>, built for <Link href="#">React</Link>
      </Meta.Text>
      <Meta.License/>
    </Meta>
  </Footer>
)));

stories.add('Navigation and links', withInfo(doc)(() => (
  <Footer>
    <Section>
      <Navigation.List title="Two Column List" listProps={{columns: 2}}>
        <Navigation.Item>
          <Link href="#">Benefits</Link>
        </Navigation.Item>
        <Navigation.Item>
          <Link href="#">Births, deaths, marriages and care</Link>
        </Navigation.Item>
        <Navigation.Item>
          <Link href="#">Business and self-employed</Link>
        </Navigation.Item>
        <Navigation.Item>
          <Link href="#">Childcare and parenting</Link>
        </Navigation.Item>
        <Navigation.Item>
          <Link href="#">Citizenship and living in the UK</Link>
        </Navigation.Item>
        <Navigation.Item>
          <Link href="#">Crime, justice and the law</Link>
        </Navigation.Item>
        <Navigation.Item>
          <Link href="#">Disabled people</Link>
        </Navigation.Item>
        <Navigation.Item>
          <Link href="#">Driving and transport</Link>
        </Navigation.Item>
        <Navigation.Item>
          <Link href="#">Education and learning</Link>
        </Navigation.Item>
        <Navigation.Item>
          <Link href="#">Employing people</Link>
        </Navigation.Item>
        <Navigation.Item>
          <Link href="#">Environment and countryside</Link>
        </Navigation.Item>
        <Navigation.Item>
          <Link href="#">Housing and local services</Link>
        </Navigation.Item>
        <Navigation.Item>
          <Link href="#">Money and tax</Link>
        </Navigation.Item>
        <Navigation.Item>
          <Link href="#">Passports, travel and living abroad</Link>
        </Navigation.Item>
        <Navigation.Item>
          <Link href="#">Visas and immigration</Link>
        </Navigation.Item>
        <Navigation.Item>
          <Link href="#">Working, jobs and pensions</Link>
        </Navigation.Item>
      </Navigation.List>
      <Navigation.List title="One Column List">
        <Navigation.Item>
          <Link href="#">How government works</Link>
        </Navigation.Item>
        <Navigation.Item>
          <Link href="#">Departments</Link>
        </Navigation.Item>
        <Navigation.Item>
          <Link href="#">Worldwide</Link>
        </Navigation.Item>
        <Navigation.Item>
          <Link href="#">Policies</Link>
        </Navigation.Item>
        <Navigation.Item>
          <Link href="#">Publications</Link>
        </Navigation.Item>
        <Navigation.Item>
          <Link href="#">Announcements</Link>
        </Navigation.Item>
      </Navigation.List>
    </Section>
    <Break/>
    <Meta logoProps={{ url: crestUrlPath }}>
      <List.List inline>
        <List.Item>
          <Link href="#">Help</Link>
        </List.Item>
        <List.Item>
          <Link href="#">Cookies</Link>
        </List.Item>
        <List.Item>
          <Link href="#">Contact</Link>
        </List.Item>
        <List.Item>
          <Link href="#">Terms and conditions</Link>
        </List.Item>
        <List.Item>
          <Link href="#">Rhestr o Wasanaethau Cymraeg</Link>
        </List.Item>
      </List.List>
      <Meta.Text>
        Designed by the <Link href="#">GDS team</Link>, built for <Link href="#">React</Link>
      </Meta.Text>
      <Meta.License/>
    </Meta>
  </Footer>
)));
