import React from 'react';
import styled from 'styled-components';
import { Tabs } from 'react-tabs';

const Container = ({ className, children, ...props }) => (
  <Tabs
    className={className}
    selectedTabClassName="selected"
    selectedTabPanelClassName="selected"
    {...props}
  >
    {children}
  </Tabs>
);

const Component = styled(Container)`
  ${({ theme }) => theme.typography.size(19)}
  color: ${({ theme }) => theme.palette.common.text}
  ${({ theme }) => theme.spacing.property('margin', { top: 1, bottom: 6 })}
`;

Component.displayName = 'Tabs';

export default Component;
