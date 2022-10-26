import React from 'react'
import {FlatList , Text, StyleSheet,  ScrollView, Alert} from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import { useNavigation, useRoute } from '@react-navigation/native';
import Request from '../api/base/index.js';

const House = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {itemId} = route.params? route.params : 0;

    const urlHouse = 'house/getHouseById/' + itemId;

    const [house, setHouse] = React.useState(['']);
    const [owner, setGetOwner] = React.useState(['']);

    React.useEffect(() => {
        const api = new Request(urlHouse);
        api.get()
        .then((response) => {
            setHouse(response.data);
            setGetOwner(response.data.owner);
        })
        .catch((error) => {throw error});
        navigation.navigate('House')
    }, []);

    return (
        <ScrollView style={styles.container}>
            <Card style={styles.container}>
                <CardImage source={{uri: house.image}} />
                <CardTitle title={house.name} />
                <CardContent text={"Province:  " + house.province} />
                <CardContent text={"City:  " + house.city} />
                <CardContent text={"Price:  " + house.price} />
                <CardContent text={"Owner Information:  " + owner.name} />
                <CardContent text={"Rooms Number:  " + house.roomsNumber} />
                <CardContent text={"Persons Number:  " + house.personsNumber} />
                <CardContent text={"Review:  " + house.review} />
                <CardContent text={"House Type:  " + house.type} />
                <CardAction style={styles.separatorAddendum} separator={false} inColumn={false}>
                    <CardButton style={styles.CardButtonInRow} onPress={() => {Alert.alert('House','House reserved sucessfully!'); navigation.navigate('HomeScreen')}} title="Reserve"color="white" /> 
                </CardAction>
            </Card>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        margin: 0
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