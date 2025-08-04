import "./Input.css"
import { Input as AntInput, InputProps } from 'antd';

export type { InputProps };

export const Input: React.FC<InputProps> = (props) => {
  return <AntInput {...props} />;
};
