import {View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import StyledText from './StyledText.jsx'
import theme from  '../theme.js'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards'


const HouseItem = (props) => (
    <Card>
        <CardImage source={{uri: props.image}} title={props.name} />
        <CardContent text="Province:  " text2={props.province} />
        <CardContent text="City:  " text2={props.city} />
        <CardContent text="Price:  " text2={props.price} />
        <CardAction separator={true} inColumn={false}>
            <CardButton onPress={() => {}} title="View"color="blue" />
        </CardAction>
    </Card> 
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