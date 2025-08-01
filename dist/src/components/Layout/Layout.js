import { jsx as _jsx } from "react/jsx-runtime";
import { Layout as AntLayout } from 'antd';
export const Header = (props) => {
    return _jsx(AntLayout.Header, Object.assign({}, props));
};
export const Content = (props) => {
    return _jsx(AntLayout.Content, Object.assign({}, props));
};
export const Footer = (props) => {
    return _jsx(AntLayout.Footer, Object.assign({}, props));
};
export const Sider = (props) => {
    return _jsx(AntLayout.Sider, Object.assign({}, props));
};
export const Layout = AntLayout;
