import React from 'react'
import {FlatList , Text, View, StyleSheet, Alert} from 'react-native'
import users from '../data/user.js'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-material-cards';
import { useNavigation } from '@react-navigation/native';




const User = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <FlatList data={users} 
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({item: user}) => (
                <Card style={styles.container}>
                    <CardImage source={{uri: user.image}} />
                    <CardTitle title={user.name} subtitle={user.lastname} />
                    <CardContent text={"Age:  " + user.age} />
                    <CardContent text={"Email:  " + user.email} />
                    <CardContent text={"Phone Number:  " + user.phoneNumber} />
                    <CardContent text={"Sex:  " + user.sex} />
                    <CardContent text={"Province: " + user.province} />
                    <CardContent text={"Is Host?:  " + user.host} />
                    <CardContent text={"Password:  " + user.password} />
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
      
export default  User

