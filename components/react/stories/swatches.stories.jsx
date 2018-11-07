import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import Marked from 'storybook-readme/components/Marked';
import tinycolor from 'tinycolor2';

import Theme from '@dwp/components-theme';

const readable = color => tinycolor.mostReadable(color, ['#fff', '#000']).toHexString();

const Frame = styled.div`
  margin: auto;
  width: 70%;
  max-width: 900px;
  min-width: 600px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 40px auto;
`;

const Square = styled.h3`
  flex-grow: 1;
  margin: 10px;
  width: 20%;
  height: 0;
  padding: 10px 5px 10%;
  background-color: ${({ color }) => color};
  color: ${({ color }) => readable(color)};
  border-radius: 5px;
  text-align: center;
  font-family: 'Courier New', Arial;
  font-size: 0.95em;
  font-weight: 300;
  line-height: 1.2;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Swatch = ({ name, color }) => <Square color={color}>{name}</Square>;

const stories = storiesOf('🖌 Colour Palette', module);

const common = `
## Common Colours
Appear throughout the application and are component/pattern specific.

Inside components, these colours can be easily interpolated into styles:
~~~js
const component = styled.h1\`
  font-size: 1.5em;
  color: $\{({ theme }) => theme.palette.common.secondaryText\}
\`;
~~~
`;

stories.add('Common', () => (
  <Frame>
    <Marked md={common} />
    <Container>
      {Object.keys(Theme.palette.common).map(key => (
        <Swatch name={key} color={Theme.palette.common[key]} />
      ))}
    </Container>
  </Frame>
));

const display = `
## Display Colours
"named" colours which are used frequently in place of hardcoding \`#000\`, for example.

Inside styles, these colours can be used like the following:
~~~js
const component = styled.h1\`
  font-size: 1.5em;
  color: $\{({ theme }) => theme.palette.display.black\}
\`;
~~~
`;

stories.add('Display', () => (
  <Frame>
    <Marked md={display} />
    <Container>
      {Object.keys(Theme.palette.display).map(key => (
        <Swatch name={key} color={Theme.palette.display[key]} />
      ))}
    </Container>
  </Frame>
));

const organisations = `
## Organisation Colours
Colours representing most government organisations.

Inside styles, these colours can be used like the following:
~~~js
const component = styled.div\`
  background-color: $\{({ theme }) => theme.palette.organisations.cabinetOffice.colour\}
\`;
~~~

> Most organisations also have an associated web safe colour, which can be access by replacing
the \`colour\` key suffix with \`colourWebsafe\`.
`;

stories.add('Organisations', () => (
  <Frame>
    <Marked md={organisations} />
    <Container>
      {Object.keys(Theme.palette.organisations).map(key => (
        <Swatch name={key} color={Theme.palette.organisations[key].colour} />
      ))}
    </Container>
  </Frame>
));
