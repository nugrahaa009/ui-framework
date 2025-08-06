import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import { Space as AntSpace } from 'antd';
const StyledSpace = styled(AntSpace) ``;
export const Space = (props) => {
    return _jsx(StyledSpace, Object.assign({}, props));
};
