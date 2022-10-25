import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Rent from '../components/Rent.js';

const RentScreen = () => {
  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight, flexGrow:1
      }}>
      <Rent />
    </View>
  );
  }

export default RentScreen;