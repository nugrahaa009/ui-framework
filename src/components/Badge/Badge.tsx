import React from 'react'
import { Badge as AntBadge, BadgeProps as AntBadgeProps } from 'antd'
import styled from 'styled-components'

export interface BadgeProps extends AntBadgeProps {
  children?: React.ReactNode
}

const StyledBadge = styled(AntBadge)``

export const Badge: React.FC<BadgeProps> = ({ children, ...rest }) => {
  return <StyledBadge {...rest}>{children}</StyledBadge>
}
