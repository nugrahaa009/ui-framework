import { jsx as _jsx } from "react/jsx-runtime";
import { Layout as AntLayout } from 'antd';
const { Header: AntHeader, Content: AntContent, Footer: AntFooter, Sider: AntSider } = AntLayout;
export const Header = (props) => (_jsx(AntHeader, Object.assign({}, props)));
export const Content = (props) => (_jsx(AntContent, Object.assign({}, props)));
export const Footer = (props) => (_jsx(AntFooter, Object.assign({}, props)));
export const Sider = (props) => (_jsx(AntSider, Object.assign({}, props)));
export const BaseLayout = AntLayout;
