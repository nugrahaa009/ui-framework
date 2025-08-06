import styled from 'styled-components';
import React from 'react';

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  gap?: string;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'stretch'};
  gap: ${({ gap }) => gap || '0'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
`;

export const Flex: React.FC<FlexProps> = ({ children, ...rest }) => {
  return <StyledFlex {...rest}>{children}</StyledFlex>;
};
