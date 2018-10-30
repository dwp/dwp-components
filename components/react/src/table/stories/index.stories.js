import React from 'react';
import { storiesOf } from '@storybook/react';
import { withReadme } from 'storybook-readme';
import { withInfo } from '@storybook/addon-info';

import { Table, Caption, Cell } from '..';

import Readme from '../README.md';

const stories = storiesOf('🍴 Table', module);

stories.addDecorator(withReadme(Readme));

const doc = `
  Use the ~<Table>~ components to make information easier to compare and scan for users.
`;

stories.add('Standard', withInfo(doc)(() => (
  <Table>
    <Caption>Dates and amounts</Caption>
    <thead>
      <tr>
        <Cell as="th" scope="col" header >Date</Cell>
        <Cell as="th" scope="col" header >Amount</Cell>
      </tr>
    </thead>
    <tbody>
      <tr>
        <Cell as="th" scope="row">First 6 weeks</Cell>
        <Cell>£109.80 per week</Cell>
      </tr>
      <tr>
        <Cell as="th" scope="row">Next 33 weeks</Cell>
        <Cell>£109.80 per week</Cell>
      </tr>
      <tr>
        <Cell as="th" scope="row">Total estimated pay</Cell>
        <Cell>£4,282.20</Cell>
      </tr>
    </tbody>
  </Table>
)));
