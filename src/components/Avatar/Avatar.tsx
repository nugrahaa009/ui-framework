import React from 'react'
import { Avatar as AntAvatar, AvatarProps as AntAvatarProps } from 'antd'
import styled from 'styled-components'

export interface AvatarProps extends AntAvatarProps {}

const StyledAvatar = styled(AntAvatar)``

export const Avatar: React.FC<AvatarProps> = (props) => {
  return <StyledAvatar {...props} />
}
