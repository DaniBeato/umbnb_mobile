import {View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import StyledText from './StyledText.jsx'
import HousesStats from './HousesStats.jsx'
import theme from  '../theme.js'

const HouseItemHeader = ({image, id, owner, name, address}) => (
    <View style={{ flexDirection: 'row', paddingBotton: 2 }}> 
        <View style={{ paddingRight: 10}}>   
            <Image style={styles.image} source={{ uri: image }} />
        </View>
        <View style={{ flex: 1}}>
            <StyledText fontSize='subheading' fontWeight='bold' color='primary'>id: {id}</StyledText> 
            <StyledText style={styles.name}>name: {name}</StyledText>
            <StyledText>owner: {owner}</StyledText>
            <StyledText>address: {address}</StyledText>
            <Text> </Text>
        </View>
    </View>
)

const HouseItem = (props) => (
    <View key={props.id} style={styles.container}>
        <HouseItemHeader {...props} />
        <HousesStats {...props} />
    </View>
)



const styles = StyleSheet.create({
    container: {
        padding: 20, 
        paddingBottom: 5, 
        paddingTop: 5,
        //paddingVertical: 5
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
        borderRadius: 4,
        marginTop: 4,
        marginBottom: 4,
        overflow: 'hidden'
        //marginVertical: 4
    },
    image: { 
        width: 48,
        height: 48,
        borderRadius: 4
    }
})


export default HouseItem