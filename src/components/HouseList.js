import React from 'react'
import {FlatList , Text, StyleSheet} from 'react-native'
import houses from '../data/houses.js'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import { useNavigation } from '@react-navigation/native';



const HousesList = () => {
    const navigation = useNavigation();
    return (
        <FlatList data={houses} 
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({item: house}) => (
            <Card style={styles.container}>
                <CardImage source={{uri: house.image}} title={house.name} />
                <CardContent text={"Province:  " + house.province} />
                <CardContent text={"City:  " + house.city} />
                <CardContent text={"Price:  " + house.price} />
                <CardAction separator={false} inColumn={false}>
                    <CardButton style={styles.CardButtonInRow} onPress={() => {navigation.navigate('House')}} title="View House"color="white" />
                </CardAction>
            </Card> 
        )}
        />
        )
    }



const styles = StyleSheet.create({
    container:{margin: 0},
    CardButtonInRow: {
        width: 110,
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
    

export default  HousesList


