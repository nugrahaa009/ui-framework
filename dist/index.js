export * from './src/components/Button/Button';
export * from './src/components/Input/Input';
import { Layout as AntLayout, Header, Content, Footer, Sider } from './src//components/Layout/Layout';
export const Layout = Object.assign(AntLayout, { Header, Content, Footer, Sider });
