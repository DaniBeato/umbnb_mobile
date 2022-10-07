import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Input from '../components/TextInput';
import Button from '../components/Button';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello</Text>
      <Text style={styles.subTitle}>Sing In to your account</Text>
      <Input placeholder="Juan@mail.com" />
      <Input placeholder="********" secureTextEntry={true}/>
      <Text style={styles.forgotPassword}>Forgot your Password?</Text>
      <Button
        width='80%'
        title="Login"
      />
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly', width: '100%', marginTop: 20}}>
      <Text style={styles.forgotPassword}>Don´t have on account?</Text>
      <Button
        bg='white'
        border='1px'
        marginTop='10px'
        width='30%'
        color='#000'
        title="Sing Up"
      />
      </View>
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    color: '#000',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 20,
    color: 'gray',
  },
  forgotPassword: {
    marginTop: 20,
    color: 'gray',
    fontSize: 15,
  },
});



export default LoginScreen;