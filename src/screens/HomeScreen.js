import React from 'react';
import Constants from 'expo-constants';
import { View } from 'react-native';
import HouseList from '../components/HouseList';

const HomeScreen = () => {
  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight, flexGrow:1
      }}>
      <HouseList />
    </View>
  );
  }

export default HomeScreen;