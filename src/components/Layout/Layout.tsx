import { Layout as AntLayout, LayoutProps } from 'antd';

export type { LayoutProps };

export const Layout: React.FC<LayoutProps> = (props) => {
  return <AntLayout {...props} />;
};
