import React from 'react'
import {FlatList , Text} from 'react-native'
import rentals from '../data/rental.js'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';



const Rental = () => {
    return (
        <FlatList data={rentals} 
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({item: rental}) => (
            <Card>
                <CardImage source={{uri: rental.houseImage}} />
                <CardTitle title={rental.date} />
                <CardContent text="Client:  " text2={rental.client} />
                <CardContent text="Host:  " text2={rental.host} />
                <CardContent text="House:  " text2={rental.house} />
                <CardContent text="Price:  " text2={rental.price} />
                <CardAction separator={true} inColumn={false}>
                    <CardButton onPress={() => {}} title="Cancel"color="red" />
                </CardAction>
            </Card>
        )}
        />
        )
    }

export default  Rental