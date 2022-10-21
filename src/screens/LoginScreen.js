import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import App, {saveData} from '../helpers/aStorage';
import user from '../api/login';
import Text from '../components/Text';
import Logo from '../components/Logo';
import Input from '../components/TextInput';
import Button from '../components/Button';
import Columns from '../components/Columns';
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = () => {

  const navigation = useNavigation();
  const [email, setEmail]  = useState('');
  const [password, setPassword] = useState('');
  const [res, setRes] = useState('');

  async function handleLogin() {
    try {
      console.log('*****');
      const usr = {
        email: email,
        password: password,
      };
      await user.post(usr)
        .then((response) => {
          console.log(response.data);
          const setRes = response;
        })
        .catch((error) => {throw error});
    } catch (error) {
      console.log(error);
    }
    if (res.status === 200) {
      await AsyncStorage.setItem('token', response.data.access_token);
      navigation.replace('Home');
    }
    else {
      throw new Error('Invalid email or password');
    }
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text
        title = 'Log in to start planning your next trip.'
        color = 'gray'
        fontSize = '18px'
        marginTop='0px'
      />
      <Input placeholder="Email"
        value= {email}
        onChangeText= {text => setEmail(text)}/>
      <Input placeholder="********"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}/>
      <Text
        title='Forgot your Password?'
        color='gray'
      />
      <Button
        width='80%'
        title="Log in"
        onPress={
          handleLogin
        }
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