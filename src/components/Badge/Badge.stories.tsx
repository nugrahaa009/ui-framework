import type { Meta, StoryObj } from '@storybook/react'
import { Badge, BadgeProps } from './Badge'
import { BellFilled, BellOutlined } from '@ant-design/icons'

const meta: Meta<typeof Badge> = {
  title: 'components/Badge',
  component: Badge,
  args: {
    count: 5,
    showZero: false,
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Badge>

export const Default: Story = {
  render: (args: BadgeProps) => (
    <Badge {...args}>
      <BellOutlined style={{ fontSize: 24 }} />
    </Badge>
  ),
}
