import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown } from './Dropdown';
const meta = {
    title: 'components/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
    argTypes: {
        trigger: {
            control: 'select',
            options: ['click', 'hover', 'contextMenu'],
        },
    },
};
export default meta;
const items = [
    {
        label: (_jsx("a", { href: "https://www.antgroup.com", target: "_blank", rel: "noopener noreferrer", children: "1st menu item" })),
        key: '0',
    },
    {
        label: (_jsx("a", { href: "https://www.aliyun.com", target: "_blank", rel: "noopener noreferrer", children: "2nd menu item" })),
        key: '1',
    },
    {
        type: 'divider',
    },
    {
        label: '3rd menu item',
        key: '3',
    },
];
export const Default = {
    render: (args) => (_jsx(Dropdown, { menu: { items }, children: _jsx("a", { onClick: (e) => e.preventDefault(), children: _jsxs(Space, { children: ["Hover me", _jsx(DownOutlined, {})] }) }) })),
};
