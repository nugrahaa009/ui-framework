import styled from 'styled-components'
import { Avatar as AntAvatar, AvatarProps as AntAvatarProps } from 'antd'

export interface AvatarProps extends AntAvatarProps {}

const StyledAvatar = styled(AntAvatar)``

export const Avatar: React.FC<AvatarProps> = (props) => {
  return <StyledAvatar {...props} />
}
