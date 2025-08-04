import type { Meta, StoryObj } from '@storybook/react';

import { BaseLayout, Header, Content, Footer, Sider } from './Layout';

const meta: Meta<typeof BaseLayout> = {
  title: 'Components/Layout',
  component: BaseLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof BaseLayout>;

export const FullLayoutWithSider: Story = {
  render: () => (
    <BaseLayout style={{ minHeight: '100vh' }}>
      <Sider
        width={200}
        style={{
          background: '#001529',
          color: '#fff',
          padding: '16px',
          borderRadius: "0px 8px 8px 0px"
        }}
      >
        Sidebar
      </Sider>
      <BaseLayout>
        <Header style={{ background: '#fff' }}>Header</Header>
        <Content style={{ padding: 50 }}>Content</Content>
        <Footer style={{ background: '#fff', textAlign: 'center' }}>Footer</Footer>
      </BaseLayout>
    </BaseLayout>
  ),
};
