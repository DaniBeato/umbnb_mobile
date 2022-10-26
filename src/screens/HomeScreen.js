import React from 'react';
import Constants from 'expo-constants';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import HouseList from '../components/HouseList';

const HomeScreen = () => {
  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight, flexGrow:1
      }}>
      <StatusBar style="auto" backgroundColor='white' />
      <HouseList />
    </View>
  );
  }

export default HomeScreen;