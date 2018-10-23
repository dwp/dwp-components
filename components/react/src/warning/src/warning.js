import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  color: ${({ theme }) => theme.palette.display.text};
  ${({ theme }) => theme.spacing.property('margin-bottom', 6)}
  padding: ${({ theme }) => theme.spacing.unit(2)} 0;
  ${({ theme }) => theme.typography.size(19)}
  position: relative;
`;

Container.displayName = 'Warning.Container';

const Assistive = styled.span`
  ${({ theme }) => theme.helpers.visuallyHidden(theme)``}
`;

Assistive.displayName = 'Warning.Assistive';

const Icon = styled.span`
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 0;
  min-width: 32px;
  min-height: 29px;
  margin-top: -20px;
  padding-top: 3px;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.palette.display.black};
  color: ${({ theme }) => theme.palette.display.white};
  background: ${({ theme }) => theme.palette.display.black};
  font-size: 1.6em;
  font-weight: 700;
  line-height: 29px;
  text-align: center;
  user-select: none;
`;

Icon.displayName = 'Warning.Icon';

const Text = styled.strong`
  display: block;
  margin-left: ${({ theme }) => theme.spacing.page.gutter / 2 * -1}px;
  padding-left: 65px;
`;

Text.displayName = 'Warning.Text';

const Warning = ({ icon, assistiveText, children }) => (
  <Container>
    <Icon>{icon}</Icon>
    <Text>
      <Assistive>{assistiveText}</Assistive>
      {children}
    </Text>
  </Container>
);

Warning.displayName = 'Warning';

Warning.propTypes = {
  /** the icon to display inside the circle to the left of the text */
  icon: PropTypes.string,
  /** the assistive text to display in place of the icon for screen readers */
  assistiveText: PropTypes.string,
  /** text for the warning body */
  children: PropTypes.node.isRequired,
};

Warning.defaultProps= {
  icon: '!',
  assistiveText: 'Warning',
};

export default Warning;
