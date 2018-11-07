import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { storiesOf } from '@storybook/react';
import Marked from 'storybook-readme/components/Marked';

import { Chart } from '..';

import Theme from '@dwp/components-theme';

import Readme from '../README.md';

const { makeWidthFlexible, XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries } = Chart;

const Frame = styled.div`
  margin: auto;
  width: 70%;
  max-width: 900px;
  min-width: 600px;
`;

const Graph = styled.div`
  ${({ theme }) => theme.typography.common()} margin: 20px auto;
`;

const stories = storiesOf('📊 Charts', module);

const FlexiblePlot = makeWidthFlexible(XYPlot);

const MSEC_DAILY = 86400000;

const MSEC_MONTHLY = (MSEC_DAILY * 7 * 52) / 12;

const timestamp = new Date('September 9 2017').getTime();

stories.add('Line Chart', () => (
  <Frame>
    <Marked md={Readme} />
    <Graph>
      <FlexiblePlot xType="time" height={400}>
        <HorizontalGridLines style={{ stroke: Theme.palette.display.grey }} />
        <XAxis
          tickFormat={d => moment(d).format('MMM YY')}
          tickTotal={6}
          tickSize={0}
          hideLine
          style={{
            text: { fill: Theme.palette.common.text },
          }}
        />
        <YAxis
          tickSize={0}
          hideLine
          style={{
            text: { fill: Theme.palette.common.text },
          }}
        />
        <LineSeries
          color={Theme.palette.display.blue}
          style={{ strokeWidth: 3 }}
          data={[
            { x: timestamp + MSEC_MONTHLY, y: 3 },
            { x: timestamp + MSEC_MONTHLY * 2, y: 5 },
            { x: timestamp + MSEC_MONTHLY * 3, y: 15 },
            { x: timestamp + MSEC_MONTHLY * 4, y: 12 },
            { x: timestamp + MSEC_MONTHLY * 5, y: 5 },
            { x: timestamp + MSEC_MONTHLY * 6, y: 15 },
            { x: timestamp + MSEC_MONTHLY * 7, y: 12 },
            { x: timestamp + MSEC_MONTHLY * 8, y: 5 },
            { x: timestamp + MSEC_MONTHLY * 9, y: 15 },
            { x: timestamp + MSEC_MONTHLY * 10, y: 12 },
          ]}
        />
      </FlexiblePlot>
    </Graph>
  </Frame>
));
