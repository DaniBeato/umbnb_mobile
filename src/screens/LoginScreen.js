import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Text from '../components/Text';
import Logo from '../components/Logo';
import Input from '../components/TextInput';
import Button from '../components/Button';
import Columns from '../components/Columns';


const LoginScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
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
        onPress={() => navigation.navigate('Home')}
        width='80%'
        title="Log in"
      />
      <Columns
        width = '100%'
        columnLeft={
          <Text
          title='Don´t have an account?'
          color='gray'
          />
        }
        columnRight={
          <Button
            onPress={() => navigation.navigate('Register')}
            bgColor='white'
            border='1px'
            marginTop='10px'
            width='30%'
            color='#000'
            title="Sign Up"
          />
        }
      />
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