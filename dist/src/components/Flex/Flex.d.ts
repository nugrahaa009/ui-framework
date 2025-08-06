import React from 'react';
export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    gap?: string;
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}
export declare const Flex: React.FC<FlexProps>;
