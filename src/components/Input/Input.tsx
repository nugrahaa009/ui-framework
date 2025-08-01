import React from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';

export type InputProps = AntInputProps;

export const Input: React.FC<InputProps> = (props) => {
  return <AntInput {...props} />;
};
