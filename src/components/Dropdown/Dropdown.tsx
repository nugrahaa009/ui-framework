import React from 'react'
import { Dropdown as AntDropdown, MenuProps } from 'antd'
import styled from 'styled-components'

export interface DropdownProps {
  items: MenuProps['items']
  children: React.ReactNode
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'
  trigger?: ('click' | 'hover' | 'contextMenu')[]
}

const StyledDropdown = styled(AntDropdown)`
  cursor: pointer;
`

export const Dropdown: React.FC<DropdownProps> = ({
  items,
  children,
  placement = 'bottomLeft',
  trigger = ['click'],
}) => {
  return (
    <StyledDropdown menu={{ items }} placement={placement} trigger={trigger}>
      <span>{children}</span>
    </StyledDropdown>
  )
}
