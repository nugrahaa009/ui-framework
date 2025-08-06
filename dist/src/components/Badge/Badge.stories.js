import { jsx as _jsx } from "react/jsx-runtime";
import { Badge } from './Badge';
import { BellOutlined } from '@ant-design/icons';
const meta = {
    title: 'components/Badge',
    component: Badge,
    args: {
        count: 5,
        showZero: false,
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    render: (args) => (_jsx(Badge, Object.assign({}, args, { children: _jsx(BellOutlined, { style: { fontSize: 24 } }) }))),
};
