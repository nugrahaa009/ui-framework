export * from './src/components/Button/Button';
export * from './src/components/Input/Input';
export * from './src/components/Table/Table';
export * from './src/components/Row/Row';
export * from './src/components/Col/Col';
export * from './src/components/List/List';
export * from './src/components/Typography/Typography';
export * from './src/components/ConfigProvider/ConfigProvider';
export * from './src/components/Form/Form';
export * from './src/components/Icons/Icons';
export * from './src/components/Flex/Flex';
export * from './src/components/Space/Space';
export * from './src/components/Badge/Badge';
export * from './src/components/Avatar/Avatar';
export * from './src/components/Divider/Divider';
export * from './src/components/Dropdown/Dropdown';
export * from './src/components/Menu/Menu';
export * from './src/components/Tooltip/Tooltip';
export type { MenuProps } from './src/components/Menu/Menu';
import { BaseLayout } from './src//components/Layout/Layout';
import { Header, Content, Footer, Sider } from './src/components/Layout/Layout';

export const Layout = Object.assign(BaseLayout, {
  Header,
  Content,
  Footer,
  Sider,
});