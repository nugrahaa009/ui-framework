import React from 'react';
import { ButtonProps } from 'antd';
export type ButtonProp = ButtonProps & {
    variant?: 'primary' | 'secondary';
};
export declare const Button: React.FC<ButtonProp>;
