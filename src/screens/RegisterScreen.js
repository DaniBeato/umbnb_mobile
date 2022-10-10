import React from 'react';
import { View, ScrollView } from 'react-native';
import Text from '../components/Text';
import Logo from '../components/Logo';
import Input from '../components/TextInput';
import Button from '../components/Button';

const RegisterScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Logo
        marginTop = '80px'
      />
      <Text
        title='Create an account to start planning your next trip.'
        color='gray'
        fontSize='15px'
        marginTop='0px'
      />
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Age" />
      <Input placeholder="Email" />
      <Input placeholder="Phone" />
      <Input placeholder="Sex" />
      <Input placeholder="Province" />
      <Input placeholder="Host" />
      <Input placeholder="Password" secureTextEntry={true} />
      <Button
        onPress={() => alert('Register')}
        width='80%'
        title="Sign Up"
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
          marginTop: 20,
          marginBottom: 20
        }}>
        <Text
          title='Already have an account?'
          color='gray'
        />
        <Button
          onPress={() => alert('Login')}
          bgColor='white'
          border='1px'
          marginTop='10px'
          width='30%'
          color='#000'
          title="Log in"
        />
      </View>
    </ScrollView>
  );
}

export default RegisterScreen;