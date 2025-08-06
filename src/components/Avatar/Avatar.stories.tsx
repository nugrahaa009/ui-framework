import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from './Avatar'
import { UserOutlined } from '@ant-design/icons'

const meta: Meta<typeof Avatar> = {
  title: 'components/Avatar',
  component: Avatar,
  args: {
    size: 64,
  },
  tags: ['autodocs'],
}


export default meta

type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  render: (args: AvatarProps) => <Avatar {...args} icon={<UserOutlined />} />,
}
