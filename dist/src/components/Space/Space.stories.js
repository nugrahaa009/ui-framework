import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Space } from './Space';
import { Button } from 'antd';
const meta = {
    title: 'components/Space',
    component: Space,
    args: {
        direction: 'horizontal',
        size: 'middle',
        wrap: false,
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    render: (args) => (_jsxs(Space, Object.assign({}, args, { children: [_jsx(Button, { children: "Button 1" }), _jsx(Button, { children: "Button 2" }), _jsx(Button, { children: "Button 3" })] }))),
};
