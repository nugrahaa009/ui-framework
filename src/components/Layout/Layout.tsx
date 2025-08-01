import React from 'react';
import { Layout as AntLayout } from 'antd';

const { Header, Content, Footer, Sider } = AntLayout;

export type LayoutProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  sider?: React.ReactNode;
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ header, footer, sider, children }) => {
  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      {sider && <Sider>{sider}</Sider>}
      <AntLayout>
        {header && <Header>{header}</Header>}
        <Content>{children}</Content>
        {footer && <Footer>{footer}</Footer>}
      </AntLayout>
    </AntLayout>
  );
};
