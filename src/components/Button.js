import React from "react";
import styled from 'styled-components/native';


const ButtonContainer = styled.TouchableOpacity`
  background-color: ${props => props.bg || '#ff5c6c'};
	border: ${props => props.border || 'none'};
  marginTop: ${props => props.marginTop || '60px'};
  padding: 10px;
  width: ${props => props.width};
  border-radius: 10px;
`

const ButtonText = styled.Text`
  color: ${props => props.color || '#fff'};
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`

const Button = ({bg, border, marginTop, width, title, color}) => (
  <ButtonContainer
    onPress={() => alert('Button Pressed')}
		bg={bg}
		border={border}
		marginTop={marginTop}
    width={width}>
			<ButtonText
			color={color}>{title}</ButtonText>
  </ButtonContainer>
)

export default Button;