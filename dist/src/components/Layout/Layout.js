import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Layout as AntLayout } from 'antd';
const { Header, Content, Footer, Sider } = AntLayout;
export const Layout = ({ header, footer, sider, children }) => {
    return (_jsxs(AntLayout, { style: { minHeight: '100vh' }, children: [sider && _jsx(Sider, { children: sider }), _jsxs(AntLayout, { children: [header && _jsx(Header, { children: header }), _jsx(Content, { children: children }), footer && _jsx(Footer, { children: footer })] })] }));
};
