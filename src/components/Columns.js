import React from "react";
import { View, StyleSheet } from "react-native";
import styled from 'styled-components/native';

const ColumnsContainer = styled.View`
  flexDirection: row;
  justifyContent: space-evenly;
  width: 100%;
  marginTop: 20px;
  marginBottom: ${props => props.marginBottom || '20px'};
`

const Columns = ( {columnLeft, columnRight, marginBottom} ) => (
  <ColumnsContainer marginBottom={marginBottom}>
    {columnLeft}
    {columnRight}
  </ColumnsContainer>
)

export default Columns;