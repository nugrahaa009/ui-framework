import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import { Menu as AntMenu } from 'antd';
const StyledMenu = styled(AntMenu) ``;
export const Menu = (props) => {
    return _jsx(StyledMenu, Object.assign({}, props));
};
