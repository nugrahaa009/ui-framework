import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown, DropdownProps } from './Dropdown'
import { Button } from 'antd'

const meta: Meta<typeof Dropdown> = {
  title: 'components/Dropdown',
  component: Dropdown,
  args: {
    placement: 'bottomLeft',
    trigger: ['hover'],
    items: [
      { key: '1', label: 'Option 1' },
      { key: '2', label: 'Option 2' },
      { key: '3', label: 'Option 3' },
    ],
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Dropdown>

export const Default: Story = {
  render: (args: DropdownProps) => (
    <Dropdown {...args}>
      <Button>Open Dropdown</Button>
    </Dropdown>
  ),
}
