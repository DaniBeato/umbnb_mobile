import React from 'react';
import Constants from 'expo-constants';
import { View  } from 'react-native';
import House from '../components/House.js';


const HouseScreen = () => {
  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight, flexGrow:1
      }}>
      <House />
    </View>
  );
  }

export default HouseScreen;