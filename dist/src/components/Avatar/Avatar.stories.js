import { jsx as _jsx } from "react/jsx-runtime";
import { Avatar } from './Avatar';
import { UserOutlined } from '@ant-design/icons';
const meta = {
    title: 'components/Avatar',
    component: Avatar,
    args: {
        size: 64,
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    render: (args) => _jsx(Avatar, Object.assign({}, args, { icon: _jsx(UserOutlined, {}) })),
};
