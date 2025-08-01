import { Layout as AntLayout } from 'antd';

export const Header: React.FC<React.ComponentProps<typeof AntLayout.Header>> = (props) => {
  return <AntLayout.Header {...props} />;
};

export const Content: React.FC<React.ComponentProps<typeof AntLayout.Content>> = (props) => {
  return <AntLayout.Content {...props} />;
};

export const Footer: React.FC<React.ComponentProps<typeof AntLayout.Footer>> = (props) => {
  return <AntLayout.Footer {...props} />;
};

export const Sider: React.FC<React.ComponentProps<typeof AntLayout.Sider>> = (props) => {
  return <AntLayout.Sider {...props} />;
};

export const Layout = AntLayout;
