import { jsx as _jsx } from "react/jsx-runtime";
import { Divider } from './Divider';
const meta = {
    title: 'components/Divider',
    component: Divider,
    args: {
        orientation: 'center',
        children: 'Text Divider',
        dashed: false,
    },
    tags: ['autodocs'],
};
export default meta;
export const Default = {
    render: (args) => _jsx(Divider, Object.assign({}, args)),
};
