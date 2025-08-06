import styled from 'styled-components'
import { Menu as AntMenu, MenuProps as AntMenuProps } from 'antd'

export interface MenuProps extends AntMenuProps {}

const StyledMenu = styled(AntMenu)``

export const Menu: React.FC<MenuProps> = (props) => {
  return <StyledMenu {...props} />
}
