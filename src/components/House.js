import React from 'react'
import {FlatList , Text, StyleSheet, View, Alert} from 'react-native'
import houses from '../data/house.js'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import { useNavigation } from '@react-navigation/native';


const House = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <FlatList data={houses} 
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({item: house}) => (
                <Card>
                    <CardImage source={{uri: house.image}} />
                    <CardTitle title={house.name} />
                    <CardContent text="Province:  " text2={house.province} />
                    <CardContent text="City:  " text2={house.city} />
                    <CardContent text="Price:  " text2={house.price} />
                    <CardContent text="Owner Information:  " text2={house.owner} />
                    <CardContent text="Rooms Number:  " text2={house.roomsNumber} />
                    <CardContent text="Persons Number:  " text2={house.personsNumber} />
                    <CardContent text="Review:  " text2={house.review} />
                    <CardContent text="House Type:  " text2={house.type} />
                    <CardAction style={styles.separatorAddendum} separator={false} inColumn={false}>
                        <CardButton style={styles.CardButtonInRow} onPress={() => {Alert.alert('','House reserved sucessfully!'); navigation.navigate('HomeScreen')}} title="Reserve"color="white" /> 
                    </CardAction>
                </Card>
            )}
            />
        </View>
        )
    }

    const styles = StyleSheet.create({
        container: {
            flex:1,
            backgroundColor: '#fff',
        },
        CardButtonInRow: {
            width: 300,
            height: 45,
            marginLeft: 60,
            marginTop: 60,
            marginBottom: 8,
            paddingLeft: 8,
            paddingRight: 8,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 4,
            backgroundColor:'#ff565b'
          },
          CardButtonInColumn: {
            height: 36,
            marginLeft: 8,
            marginTop: 8,
            marginBottom: 8,
            paddingLeft: 8,
            paddingRight: 8,
            justifyContent: 'center',
            alignItems: 'flex-start',
            borderRadius: 4,
          },
          buttonText: {
            fontWeight: '600',
            fontSize: 14,
            color: 'white',
          },

      });


export default  House