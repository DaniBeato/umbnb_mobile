import React from 'react'
import {FlatList , Text, View, StyleSheet, Alert} from 'react-native'
import users from '../data/user.js'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import { useNavigation } from '@react-navigation/native';
import api from '../api/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getData from '../helpers/getData';


const User = () => {
    const navigation = useNavigation();

    // const [users, setUsers] = React.useState([]);
    // const [usr, setUsr] = React.useState([]);

    // React.useEffect(() => {}
    //     setUsr = getData();
    // })
    // const currentUser = async () => {
    //     const usr = await getData('user');
    //     console.log(usr);
    //     return usr;
    // }

    // console.log(usr)

    // const user = currentUser();
    // console.log('current' + JSON.stringify(usr));

    // const userData = () => {
    //     api.getOne(user.id)
    //     .then((response) => {
    //         console.log('usuario' + JSON.stringify(response));
    //         const data = response.data;
    //         setUsers(data);
    //         return JSON.stringify(data);
    //     })
    //     .catch((error) => {throw error});
    // }

    // userData();

    return (
        <View style={styles.container}>
            <FlatList data={users}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({}) => (
                <Card style={styles.container}>
                    <CardImage source={{uri: users.image}} />
                    <CardTitle title={users.name} subtitle={users.lastname} />
                    <CardContent text={"Age:  " + users.age} />
                    <CardContent text={"Email:  " + users.email} />
                    <CardContent text={"Phone Number:  " + users.phoneNumber} />
                    <CardContent text={"Sex:  " + users.sex} />
                    <CardContent text={"Province: " + users.province} />
                    <CardContent text={"Is Host?:  " + users.host} />
                    <CardContent text={"Password:  " + users.password} />
                    <CardAction  separator={false} inColumn={true}>
                        <CardButton style={styles.CardButtonInRow} onPress={() => {navigation.navigate('Rental')}} title="Rental List"color="white" /> 
                        <CardButton style={styles.WhiteBotton} onPress={() => {Alert.alert('Log Out','Log Out sucessfully!'); navigation.navigate('HomeScreen')}} title="Log Out"color="black" /> 
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
        margin: 0
    },
    WhiteBotton:{
        width: 300,
        height: 45,
        marginLeft: 60,
        marginTop: 25,
        marginBottom: 2,
        paddingLeft: 8,
        paddingRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor:'#fff',
        borderWidth: 1,
    },
    CardButtonInRow: {
        width: 300,
        height: 45,
        marginLeft: 60,
        marginTop: 25,
        marginBottom: 2,
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

export default User

