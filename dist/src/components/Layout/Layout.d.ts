declare const AntHeader: import("react").ForwardRefExoticComponent<import("antd").LayoutProps & import("react").RefAttributes<HTMLElement>>, AntContent: import("react").ForwardRefExoticComponent<import("antd").LayoutProps & import("react").RefAttributes<HTMLElement>>, AntFooter: import("react").ForwardRefExoticComponent<import("antd").LayoutProps & import("react").RefAttributes<HTMLElement>>, AntSider: import("react").ForwardRefExoticComponent<import("antd").SiderProps & import("react").RefAttributes<HTMLDivElement>>;
export declare const Header: React.FC<React.ComponentProps<typeof AntHeader>>;
export declare const Content: React.FC<React.ComponentProps<typeof AntContent>>;
export declare const Footer: React.FC<React.ComponentProps<typeof AntFooter>>;
export declare const Sider: React.FC<React.ComponentProps<typeof AntSider>>;
export declare const BaseLayout: import("react").ForwardRefExoticComponent<import("antd").LayoutProps & import("react").RefAttributes<HTMLElement>> & {
    Header: import("react").ForwardRefExoticComponent<import("antd").LayoutProps & import("react").RefAttributes<HTMLElement>>;
    Footer: import("react").ForwardRefExoticComponent<import("antd").LayoutProps & import("react").RefAttributes<HTMLElement>>;
    Content: import("react").ForwardRefExoticComponent<import("antd").LayoutProps & import("react").RefAttributes<HTMLElement>>;
    Sider: import("react").ForwardRefExoticComponent<import("antd").SiderProps & import("react").RefAttributes<HTMLDivElement>>;
    _InternalSiderContext: typeof import("antd/es/layout/Sider").SiderContext;
};
export {};
