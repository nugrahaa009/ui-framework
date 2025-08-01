import React from 'react';
import { Button as AntButton, ButtonProps } from 'antd';

export type ButtonProp = ButtonProps & {
  variant?: 'primary' | 'secondary';
};

export const Button: React.FC<ButtonProp> = ({ variant = 'primary', ...props }) => {
  const type = variant === 'primary' ? 'primary' : 'default';
  return <AntButton type={type} {...props} />;
};
