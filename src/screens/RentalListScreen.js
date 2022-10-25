import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import RentalList from '../components/RentalList';

const RentalListScreen = () => {
  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight, flexGrow:1
      }}>
      <RentalList />
    </View>
  );
  }

export default RentalListScreen;