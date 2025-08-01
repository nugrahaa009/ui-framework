import React from 'react';
declare const AntHeader: React.ForwardRefExoticComponent<import("antd").LayoutProps & React.RefAttributes<HTMLElement>>, AntContent: React.ForwardRefExoticComponent<import("antd").LayoutProps & React.RefAttributes<HTMLElement>>, AntFooter: React.ForwardRefExoticComponent<import("antd").LayoutProps & React.RefAttributes<HTMLElement>>, AntSider: React.ForwardRefExoticComponent<import("antd").SiderProps & React.RefAttributes<HTMLDivElement>>;
export declare const Header: React.FC<React.ComponentProps<typeof AntHeader>>;
export declare const Content: React.FC<React.ComponentProps<typeof AntContent>>;
export declare const Footer: React.FC<React.ComponentProps<typeof AntFooter>>;
export declare const Sider: React.FC<React.ComponentProps<typeof AntSider>>;
export declare const BaseLayout: React.ForwardRefExoticComponent<import("antd").LayoutProps & React.RefAttributes<HTMLElement>> & {
    Header: React.ForwardRefExoticComponent<import("antd").LayoutProps & React.RefAttributes<HTMLElement>>;
    Footer: React.ForwardRefExoticComponent<import("antd").LayoutProps & React.RefAttributes<HTMLElement>>;
    Content: React.ForwardRefExoticComponent<import("antd").LayoutProps & React.RefAttributes<HTMLElement>>;
    Sider: React.ForwardRefExoticComponent<import("antd").SiderProps & React.RefAttributes<HTMLDivElement>>;
    _InternalSiderContext: typeof import("antd/es/layout/Sider").SiderContext;
};
export {};
