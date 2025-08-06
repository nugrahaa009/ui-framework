import styled from 'styled-components'
import { Space as AntSpace, SpaceProps as AntSpaceProps } from 'antd'

export interface SpaceProps extends AntSpaceProps {}

const StyledSpace = styled(AntSpace)``

export const Space: React.FC<SpaceProps> = (props) => {
  return <StyledSpace {...props} />
}
