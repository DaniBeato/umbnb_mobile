import LogoText from "../../assets/umbnb-logo.png";
import styled from "styled-components";


const LogoContainer = styled.Image`
  width: ${props => props.width || '200px'};
  height: ${props => props.height || '200px'};
  marginTop: ${props => props.marginTop || '0px'};
`

const Logo = ({width, height, marginTop}) => (
  <LogoContainer
    source={LogoText}
    width={width}
    height={height}
    marginTop={marginTop}
  />
)

export default Logo;