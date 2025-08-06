import { MenuProps, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, DropdownProps } from './Dropdown'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Dropdown> = {
  title: 'components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      control: 'select',
      options: ['click', 'hover', 'contextMenu'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Dropdown>

const items: MenuProps['items'] = [
  {
    label: (
      <a
        href="https://www.antgroup.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        1st menu item
      </a>
    ),
    key: '0',
  },
  {
    label: (
      <a
        href="https://www.aliyun.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        2nd menu item
      </a>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
]

export const Default: Story = {
  render: (args: DropdownProps) => (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Hover me
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  ),
}
