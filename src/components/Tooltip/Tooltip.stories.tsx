import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from './Tooltip'
import { Button } from 'antd'

const meta: Meta<typeof Tooltip> = {
  title: 'components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: [
        'top', 'left', 'right', 'bottom',
        'topLeft', 'topRight', 'bottomLeft', 'bottomRight',
        'leftTop', 'leftBottom', 'rightTop', 'rightBottom'
      ]
    }
  }
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  args: {
    title: 'This is a tooltip',
    placement: 'top',
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  ),
}
