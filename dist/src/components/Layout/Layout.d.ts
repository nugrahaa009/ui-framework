import React from 'react';
export type LayoutProps = {
    header?: React.ReactNode;
    footer?: React.ReactNode;
    sider?: React.ReactNode;
    children: React.ReactNode;
};
export declare const Layout: React.FC<LayoutProps>;
