import React from "react";
import styled from 'styled-components/native';


const ButtonContainer = styled.TouchableOpacity`
  background-color: ${props => props.bgColor || '#ff565b'};
	border: ${props => props.border || 'none'};
  marginTop: ${props => props.marginTop || '60px'};
  padding: 10px;
  width: ${props => props.width};
  border-radius: 5px;
`

const ButtonText = styled.Text`
  color: ${props => props.color || '#fff'};
  font-size: 15px;
  font-weight: bold;
  text-align: center;
`

const Button = ({onPress, bgColor, border, marginTop, width, title, color}) => (
  <ButtonContainer
    onPress={onPress}
		bgColor={bgColor}
		border={border}
		marginTop={marginTop}
    width={width}>
			<ButtonText
			color={color}>{title}</ButtonText>
  </ButtonContainer>
)

export default Button;