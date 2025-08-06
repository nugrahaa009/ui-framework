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
import { BaseLayout } from './src//components/Layout/Layout';
import { Header, Content, Footer, Sider } from './src/components/Layout/Layout';

export const Layout = Object.assign(BaseLayout, {
  Header,
  Content,
  Footer,
  Sider,
});