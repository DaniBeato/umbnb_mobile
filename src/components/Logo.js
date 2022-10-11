import LogoText from "../../assets/umbnb-logo.png";
import styled from "styled-components";


const LogoContainer = styled.Image`
  width: ${props => props.width || '200px'};
  height: ${props => props.height || '200px'};
`

const Logo = ({width, height}) => (
  <LogoContainer
    source={LogoText}
    width={width}
    height={height}
  />
)

export default Logo;