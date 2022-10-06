import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import HousesList from '../components/HousesList';

const HomeScreen = () => {
  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight, flexGrow:1
      }}>
      <HousesList />
    </View>
  );
  }

export default HomeScreen;