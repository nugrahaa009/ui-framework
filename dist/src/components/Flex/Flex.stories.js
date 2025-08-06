import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex } from './Flex';
import styled from 'styled-components';
const Box = styled.div `
  background-color: #1890ff
  color: white
  padding: 16px
  border-radius: 4px
  text-align: center
`;
const meta = {
    title: 'components/Flex',
    component: Flex,
    args: {
        justify: 'center',
        align: 'center',
        gap: '16px',
        direction: 'row',
    },
};
export default meta;
export const Default = {
    render: (args) => (_jsxs(Flex, Object.assign({}, args, { children: [_jsx(Box, { children: "Box 1" }), _jsx(Box, { children: "Box 2" }), _jsx(Box, { children: "Box 3" })] }))),
};
