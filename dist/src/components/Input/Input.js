import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import { Input as AntInput } from 'antd';
const StyledInput = styled(AntInput) `
  padding: 12px;
  border-radius: 8px;
`;
export const Input = (props) => {
    return _jsx(StyledInput, Object.assign({}, props));
};
