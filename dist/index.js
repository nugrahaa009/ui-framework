export * from './src/components/Button/Button';
export * from './src/components/Input/Input';
import { BaseLayout } from './src//components/Layout/Layout';
import { Header, Content, Footer, Sider } from './src/components/Layout/Layout';
export const Layout = Object.assign(BaseLayout, {
    Header,
    Content,
    Footer,
    Sider,
});
