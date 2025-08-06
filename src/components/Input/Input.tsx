import styled from 'styled-components';
import { Input as AntInput, InputProps } from 'antd';

export type { InputProps };

const StyledInput = styled(AntInput)`
  padding: 12px;
  border-radius: 8px;
`;

export const Input: React.FC<InputProps> = (props) => {
  return <StyledInput {...props} />;
};
