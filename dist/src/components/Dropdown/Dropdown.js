import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import { Dropdown as AntDropdown } from 'antd';
const StyledDropdown = styled(AntDropdown) `
  cursor: pointer;
`;
export const Dropdown = (props) => {
    return (_jsx(StyledDropdown, Object.assign({}, props)));
};
