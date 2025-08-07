import { jsx as _jsx } from "react/jsx-runtime";
import { Tooltip } from './Tooltip';
import { Button } from 'antd';
const meta = {
    title: 'components/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
    argTypes: {
        placement: {
            control: 'select',
            options: [
                'top', 'left', 'right', 'bottom',
                'topLeft', 'topRight', 'bottomLeft', 'bottomRight',
                'leftTop', 'leftBottom', 'rightTop', 'rightBottom'
            ]
        }
    }
};
export default meta;
export const Default = {
    args: {
        title: 'This is a tooltip',
        placement: 'top',
    },
    render: (args) => (_jsx(Tooltip, Object.assign({}, args, { children: _jsx(Button, { children: "Hover me" }) }))),
};
