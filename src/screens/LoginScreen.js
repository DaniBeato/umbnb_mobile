import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import Text from '../components/Text';
import Logo from '../components/Logo';
import Input from '../components/TextInput';
import Button from '../components/Button';


const LoginScreen = () => {

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Hello</Text> */}
      <Logo />
      <Text
        title = 'Log in to start planning your next'
        color = 'gray'
        fontSize = '18px'
        marginTop='0px'
      />
      <Input placeholder="Juan@mail.com" />
      <Input placeholder="********" secureTextEntry={true}/>
      <Text
        title='Forgot your Password?'
        color='gray'
      />
      <Button
        onPress={() => alert('Login')}
        width='80%'
        title="Log in"
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
          marginTop: 20
        }}>
        <Text
          title='Don´t have an account?'
          color='gray'
        />
        <Button
          onPress={() => alert('Register')}
          bgColor='white'
          border='1px'
          marginTop='10px'
          width='30%'
          color='#000'
          title="Sign Up"
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
});

export default LoginScreen;