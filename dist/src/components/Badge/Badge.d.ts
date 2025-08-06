import React from 'react';
import { BadgeProps as AntBadgeProps } from 'antd';
export interface BadgeProps extends AntBadgeProps {
    children?: React.ReactNode;
}
export declare const Badge: React.FC<BadgeProps>;
