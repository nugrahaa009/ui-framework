import styled from 'styled-components'
import { Dropdown as AntDropdown, DropdownProps as AntDropdownProps } from 'antd'

export interface DropdownProps extends AntDropdownProps {}

const StyledDropdown = styled(AntDropdown)`
  cursor: pointer;
`

export const Dropdown: React.FC<DropdownProps> = (props) => {
  return (
    <StyledDropdown {...props} />
  )
}
