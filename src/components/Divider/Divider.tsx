import styled from 'styled-components'
import { Divider as AntDivider, DividerProps as AntDividerProps } from 'antd'

export interface DividerProps extends AntDividerProps {}

const StyledDivider = styled(AntDivider)``

export const Divider: React.FC<DividerProps> = (props) => {
  return <StyledDivider {...props} />
}
