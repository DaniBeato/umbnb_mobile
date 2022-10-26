import React from 'react'
import {FlatList , Text, StyleSheet, Alert} from 'react-native'
import rentals from '../data/rentals.js'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import { useNavigation } from '@react-navigation/native';



const RentalList = () => {
    const navigation = useNavigation();
    return (
        <FlatList data={rentals} 
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({item: rental}) => (
            <Card style={styles.container}>
                <CardImage source={{uri: rental.houseImage}} />
                <CardTitle title={rental.date} />
                <CardContent text={"Client: " + rental.client} />
                <CardContent text={"Host:  " + rental.host} />
                <CardContent text={"House:  " + rental.house} />
                <CardContent text={"Price:  " + rental.price} />
                <CardAction separator={false} inColumn={false}>
                    <CardButton style={styles.CardButtonInRow} onPress={() => {Alert.alert('Rentals','Rental deleted sucessfully!'); navigation.navigate('HomeScreen')}} title="Delete Rental"color="white" />
                </CardAction>
            </Card>
        )}
        />
        )
    }

    const styles = StyleSheet.create({
        container:{margin: 0},
        CardButtonInRow: {
            width: 160,
            height: 35,
            marginLeft: 16,
            marginTop: 15,
            marginBottom: 15,
            paddingLeft: 8,
            paddingRight: 8,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            backgroundColor:'#ff565b'
          },        
    });

export default  RentalList