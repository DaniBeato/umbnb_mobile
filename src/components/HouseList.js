import React from 'react'
import {FlatList , Text} from 'react-native'
import houses from '../data/houses.js'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import { useNavigation } from '@react-navigation/native';



const HousesList = () => {
    const navigation = useNavigation();
    return (
        <FlatList data={houses} 
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({item: house}) => (
            <Card>
                <CardImage source={{uri: house.image}} title={house.name} />
                <CardContent text="Province:  " text2={house.province} />
                <CardContent text="City:  " text2={house.city} />
                <CardContent text="Price:  " text2={house.price} />
                <CardAction separator={true} inColumn={false}>
                    <CardButton onPress={() => {navigation.navigate('House')}} title="View House"color="red" />
                </CardAction>
            </Card> 
        )}
        />
        )
    }

export default  HousesList


