import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BaseLayout, Header, Content, Footer, Sider } from './Layout';
const meta = {
    title: 'Components/Layout',
    component: BaseLayout,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};
export default meta;
export const FullLayoutWithSider = {
    render: () => (_jsxs(BaseLayout, { style: { minHeight: '100vh' }, children: [_jsx(Sider, { width: 200, style: {
                    background: '#001529',
                    color: '#fff',
                    padding: '16px',
                }, children: "Sidebar" }), _jsxs(BaseLayout, { children: [_jsx(Header, { style: { background: '#fff', padding: 0 }, children: "Header" }), _jsx(Content, { style: { margin: '16px' }, children: "Content" }), _jsx(Footer, { style: { textAlign: 'center' }, children: "Footer" })] })] })),
};
