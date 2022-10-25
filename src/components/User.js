import React from 'react'
import {FlatList , Text, View,StyleSheet, Alert} from 'react-native'
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
                <Card>
                    <CardImage source={{uri: user.image}} />
                    <CardTitle title={user.name} subtitle={user.lastname} />
                    <CardContent text="Age:  " text2={user.age} />
                    <CardContent text="Email:  " text2={user.email} />
                    <CardContent text="Phone Number:  " text2={user.phoneNumber} />
                    <CardContent text="Sex:  " text2={user.sex} />
                    <CardContent text="Province:  " text2={user.province} />
                    <CardContent text="Is Host?:  " text2={user.host} />
                    <CardContent text="Password:  " text2={user.password} />
                    <CardAction  separator={false} inColumn={false}>
                        <CardButton style={styles.CardButtonInRow} onPress={() => {Alert.alert('','Account deleted sucessfully!'); navigation.navigate('HomeScreen')}} title="Delete Account"color="white" /> 
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
      
export default  User

