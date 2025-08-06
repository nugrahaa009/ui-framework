import type { Meta, StoryObj } from '@storybook/react'
import { Divider, DividerProps } from './Divider'

const meta: Meta<typeof Divider> = {
  title: 'components/Divider',
  component: Divider,
  args: {
    orientation: 'center',
    children: 'Text Divider',
    dashed: false,
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Divider>

export const Default: Story = {
  render: (args: DividerProps) => <Divider {...args} />,
}
