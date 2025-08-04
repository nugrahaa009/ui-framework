import { Layout as AntLayout } from 'antd';

const { Header: AntHeader, Content: AntContent, Footer: AntFooter, Sider: AntSider } = AntLayout;

export const Header: React.FC<React.ComponentProps<typeof AntHeader>> = (props) => (
  <AntHeader {...props} />
);

export const Content: React.FC<React.ComponentProps<typeof AntContent>> = (props) => (
  <AntContent {...props} />
);

export const Footer: React.FC<React.ComponentProps<typeof AntFooter>> = (props) => (
  <AntFooter {...props} />
);

export const Sider: React.FC<React.ComponentProps<typeof AntSider>> = (props) => (
  <AntSider {...props} />
);

export const BaseLayout = AntLayout;
