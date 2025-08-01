import { ButtonProps } from 'antd';
import React from 'react';
export type ButtonProp = ButtonProps & {
    variant?: 'primary' | 'secondary';
};
export declare const Button: React.FC<ButtonProp>;
