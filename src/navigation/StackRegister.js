import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';

const RegisterStackNavigator = createNativeStackNavigator();

function RegisterNavigator() {
  return (
    <RegisterStackNavigator.Navigator
      initialRouteName="Register"
    >
      <ResgisterStackNavigator.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
      <RegisterStackNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerTitle: '',
        }}
      />
    </RegisterStackNavigator.Navigator>
  );
}

export default RegisterNavigator;