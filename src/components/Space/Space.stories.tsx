import type { Meta, StoryObj } from '@storybook/react'
import { Space, SpaceProps } from './Space'
import { Button } from 'antd'

const meta: Meta<typeof Space> = {
  title: 'components/Space',
  component: Space,
  args: {
    direction: 'horizontal',
    size: 'middle',
    wrap: false,
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Space>

export const Default: Story = {
  render: (args: SpaceProps) => (
    <Space {...args}>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Space>
  ),
}
