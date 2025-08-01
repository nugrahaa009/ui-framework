import { Layout as AntLayout } from 'antd';
export declare const Header: React.FC<React.ComponentProps<typeof AntLayout.Header>>;
export declare const Content: React.FC<React.ComponentProps<typeof AntLayout.Content>>;
export declare const Footer: React.FC<React.ComponentProps<typeof AntLayout.Footer>>;
export declare const Sider: React.FC<React.ComponentProps<typeof AntLayout.Sider>>;
export declare const Layout: import("react").ForwardRefExoticComponent<import("antd").LayoutProps & import("react").RefAttributes<HTMLElement>> & {
    Header: import("react").ForwardRefExoticComponent<import("antd").LayoutProps & import("react").RefAttributes<HTMLElement>>;
    Footer: import("react").ForwardRefExoticComponent<import("antd").LayoutProps & import("react").RefAttributes<HTMLElement>>;
    Content: import("react").ForwardRefExoticComponent<import("antd").LayoutProps & import("react").RefAttributes<HTMLElement>>;
    Sider: import("react").ForwardRefExoticComponent<import("antd").SiderProps & import("react").RefAttributes<HTMLDivElement>>;
    _InternalSiderContext: typeof import("antd/es/layout/Sider").SiderContext;
};
