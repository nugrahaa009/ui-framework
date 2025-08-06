import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Breadcrumb, Menu } from 'antd';
import { BaseLayout as Layout, Header, Content, Footer, Sider } from './Layout';
import { DesktopOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
const items = [
    getItem('Option 1', '1', _jsx(PieChartOutlined, {})),
    getItem('Option 2', '2', _jsx(DesktopOutlined, {})),
    getItem('Option 3', '3', _jsx(UserOutlined, {}), [
        getItem('Option 4', 'Option 4'),
        getItem('Option 5', 'Option 5'),
        getItem('Option 6', 'Option 6'),
    ]),
];
const meta = {
    title: 'Components/Layout',
    component: Layout,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};
export default meta;
export const FullLayoutWithSider = {
    render: () => (_jsxs(Layout, { style: { minHeight: '100vh' }, children: [_jsxs(Sider, { children: [_jsx("div", { className: "demo-logo-vertical" }), _jsx(Menu, { theme: "dark", defaultSelectedKeys: ['1'], mode: "inline", items: items })] }), _jsxs(Layout, { children: [_jsx(Header, { style: { padding: 0, background: '#fff' } }), _jsxs(Content, { style: { margin: '0 16px' }, children: [_jsx(Breadcrumb, { style: { margin: '16px 0' }, items: [{ title: 'Dashboard' }, { title: 'Option 1' }] }), _jsx("div", { style: {
                                    padding: 24,
                                    minHeight: 360,
                                    background: '#fff',
                                    borderRadius: 6,
                                }, children: "Option 1" })] }), _jsxs(Footer, { style: { textAlign: 'center', background: '#fff' }, children: ["BRI \u00A9", new Date().getFullYear()] })] })] })),
};
