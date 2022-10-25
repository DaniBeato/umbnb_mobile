import React from 'react';
import Constants from 'expo-constants';
import {View} from 'react-native';
import User from '../components/User.js';

const UserScreen = () => {
  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight, flexGrow:1
      }}>
      <User />
    </View>
  );
  }

export default UserScreen;