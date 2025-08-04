import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb, Menu, type MenuProps } from 'antd';
import { BaseLayout as Layout, Header, Content, Footer, Sider } from './Layout';
import { DesktopOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <UserOutlined />, [
    getItem('Option 4', 'Option 4'),
    getItem('Option 5', 'Option 5'),
    getItem('Option 6', 'Option 6'),
  ]),
];

const meta: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Layout>;

export const FullLayoutWithSider: Story = {
  
  render: () => (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#fff' }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'Dashboard' }, { title: 'Option 1' }]} />
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: '#fff',
              borderRadius: 6,
            }}
          >
            Option 1
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', background: '#fff' }}>
            BRI ©{new Date().getFullYear()}
          </Footer>
      </Layout>
    </Layout>
  ),
};
