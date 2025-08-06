import { Flex } from './Flex'
import styled from 'styled-components'
import type { Meta, StoryObj } from '@storybook/react'

const Box = styled.div`
  background-color: #1890ff;
  color: white;
  padding: 16px;
  border-radius: 4px;
  text-align: center;
`

const meta: Meta<typeof Flex> = {
  title: 'components/Flex',
  component: Flex,
  tags: ['autodocs'],
  args: {
    justify: 'center',
    align: 'center',
    gap: '16px',
    direction: 'row',
  },
}

export default meta

type Story = StoryObj<typeof Flex>

export const Default: Story = {
  render: (args) => (
    <Flex {...args}>
      <Box>Box 1</Box>
      <Box>Box 2</Box>
      <Box>Box 3</Box>
    </Flex>
  ),
}
