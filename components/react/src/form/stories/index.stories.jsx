import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';

import { ErrorMessage, ErrorSummary, Hint, Checkbox, Fieldset, Input, Label, Legend, Group } from '..';

import { List } from '../../list';
import { Link } from '../../link';
import { Heading } from '../../heading';
import { Paragraph } from '../../paragraph';

// import FormReadme from '../README.md';

const stories = storiesOf('👔 Forms', module);

stories.add('Text Input', () => (
  <Group>
    <Paragraph.M as={Label} htmlFor="full-name">Full Name</Paragraph.M>
    <Input id="full-name" name="full-name" type="text" />
  </Group>
));

const detectChange = (e) => console.log(e);

stories.add('Checkboxes', () => (
  <Group>
    <Heading.XL as={Legend}>What is your Nationality?</Heading.XL>
    <Paragraph.M as={Hint} id="more-detail-hint">
      If you have dual nationality, select all options that are relevant to you.
    </Paragraph.M>
    <Group>
      <Checkbox checked label="British" hint="including English, Scottish, Welsh and Northern Irish" name="nationality" value="british">
        <Group error>
          <Paragraph.M as={Label} htmlFor="nin">Enter your National Insurance Number (NIN)</Paragraph.M>
          <Paragraph.M as={ErrorMessage}>Invalid national insurance number</Paragraph.M>
          <Input error width={30} id="nin" name="nin" type="text" value="XX45-DJWJDIA-dAWDJKAO" />
        </Group>
      </Checkbox>
      <Checkbox label="Irish" name="nationality" value="irish">
        <Group>
          <Paragraph.M as={Label} htmlFor="pps">Enter your Personal Public Service (PPS) Number</Paragraph.M>
          <Input width={30} id="pps" name="pps" type="text" />
        </Group>
      </Checkbox>
      <Checkbox label="Citizen of another country" name="nationality" value="another" />
    </Group>
  </Group>
));

stories.add('Textarea', () => (
  <Group>
    <Paragraph.M as={Label} htmlFor="full-name">Can you provide more detail?</Paragraph.M>
    <Paragraph.M as={Hint} id="more-detail-hint">
      Don’t include personal or financial information, eg your National Insurance number or credit card details.
    </Paragraph.M>
    <Input as="textarea" id="full-name" name="full-name" rows="5" aria-describedby="more-detail-hint" />
  </Group>
));

stories.add('Fieldset', () => (
  <Fieldset>
    <Heading.XL as={Legend}>What is your address?</Heading.XL>
    <Group>
      <Paragraph.M as={Label} htmlFor="address-line-1">Building and street</Paragraph.M>
      <Input width={30} id="address-line-1" name="address-line-1" type="text" />
    </Group>
    <Group>
      <Paragraph.M as={Label} htmlFor="address-line-2">Building and street</Paragraph.M>
      <Input width={30} id="address-line-2" name="address-line-2" type="text" />
    </Group>
    <Group>
      <Paragraph.M as={Label} htmlFor="address-town">Town or city</Paragraph.M>
      <Input width={20} id="address-town" name="address-town" type="text" />
    </Group>
    <Group>
      <Paragraph.M as={Label} htmlFor="address-county">County</Paragraph.M>
      <Input width={20} id="address-county" name="address-county" type="text" />
    </Group>
    <Group>
      <Paragraph.M as={Label} htmlFor="address-postcode">Postcode</Paragraph.M>
      <Input width={10} id="address-postcode" name="address-postcode" type="text" />
    </Group>
  </Fieldset>
));

stories.add('Error Summary', () => (
  <ErrorSummary aria-labelledby="error-summary-title" role="alert" tabindex="-1">
    <Heading.M>There is a problem</Heading.M>
    <List.List>
      <List.Item>
        <Link href="#">Date of birth must be in the past</Link>
      </List.Item>
      <List.Item>
        <Link href="#">Enter a postcode, like AA1 1AA</Link>
      </List.Item>
    </List.List>
  </ErrorSummary>
));