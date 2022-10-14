import React from "react";
import styled from 'styled-components/native';

const ColumnsContainer = styled.View`
  flexDirection: row;
  justifyContent: ${props => props.justifyContent || 'space-evenly'};
  alignItems: ${props => props.alignItems || 'center'};
  width: ${props => props.width || '80%'};
  marginTop: ${props => props.marginTop || '20px'};
  marginBottom: ${props => props.marginBottom || '0px'};
`

const Columns = ( {columnLeft, columnRight, justifyContent, alignItems, width, marginTop, marginBottom} ) => (
  <ColumnsContainer
    justifyContent={justifyContent}
    alignItems={alignItems}
    width={width}
    marginTop={marginTop}
    marginBottom={marginBottom}>
      {columnLeft}
      {columnRight}
  </ColumnsContainer>
)

export default Columns;