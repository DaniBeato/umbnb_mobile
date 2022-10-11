import {View, Text, StyleSheet} from 'react-native'
import React from 'react'
import StyledText from './StyledText.jsx'
import HousesStats from './HousesStats.jsx'
import theme from  '../theme.js'



const HouseItem = (props) => (
    <View key={props.id} style={styles.container}>
        <StyledText fontSize='subheading' fontWeight='bold' color='primary'>id: {props.id}</StyledText> 
        <StyledText style={styles.name}>name: {props.name}</StyledText>
        <StyledText>owner: {props.owner}</StyledText>
        <StyledText>address: {props.address}</StyledText>
        <Text> </Text>
        <HousesStats {...props} />
    </View>
)



const styles = StyleSheet.create({
    container: {
        padding: 20, 
        paddingBottom: 5, 
        paddingTop: 5,
    },
    strong: {
        color: '#09f',
        fontWeight: 'bold', 
        marginBottom: 5
    },
    name: {
        padding: 4,
        color: theme.colors.white,
        backgroundColor: theme.colors.primary,
        alignSelf: 'flex-start',
        borderRadius: 60,
        overflow: 'hidden'
    }
})


export default HouseItem