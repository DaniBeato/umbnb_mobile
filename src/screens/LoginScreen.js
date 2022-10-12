import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Text from '../components/Text';
import Logo from '../components/Logo';
import Input from '../components/TextInput';
import Button from '../components/Button';


const LoginScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Hello</Text> */}
      <Logo />
      <Text
        title = 'Log in to start planning your next trip.'
        color = 'gray'
        fontSize = '18px'
        marginTop='0px'
      />
      <Input placeholder="Email" />
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
          onPress={() => navigation.navigate('Register')}
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