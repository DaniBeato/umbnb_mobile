import React from "react";
import styled from "styled-components";


const TextContainer = styled.Text`
  color: ${props => props.color || '#000'};
  font-size: ${props => props.fontSize || '15px'};
  font-weight: ${props => props.fontWeight || 'normal'};
  margin-top: ${props => props.marginTop || '20px'};
  text-align: ${props => props.textAlign || 'center'};
`

const Text = ({color, fontSize, fontWeight, marginTop, textAlign, title}) => (
	<TextContainer
		color={color}
		fontSize={fontSize}
		fontWeight={fontWeight}
		marginTop={marginTop}
		textAlign={textAlign}
		>{title}</TextContainer>
)

export default Text;
