import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
import { Avatar as AntAvatar } from 'antd';
const StyledAvatar = styled(AntAvatar) ``;
export const Avatar = (props) => {
    return _jsx(StyledAvatar, Object.assign({}, props));
};
