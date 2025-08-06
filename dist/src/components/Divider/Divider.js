import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import { Divider as AntDivider } from 'antd';
const StyledDivider = styled(AntDivider) ``;
export const Divider = (props) => {
    return _jsx(StyledDivider, Object.assign({}, props));
};
