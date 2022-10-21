import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useState, useEffect} from 'react';
import { SytleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

let STORAGE_KEY = 'token';

const App = () => {
  conts [input, setInput] = useState('');

  const saveData = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, value)
      console.log('Data saved')
    } catch (e) {
      console.log('Failed to save the data to the storage')
    }
  }

  const readData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);

      if (value !== null) {
        setInput(value);
      }
    } catch (e) {
      alert('Failed to fetch the data from storage')
    }
  }

  useEffect(() => {
    readData();
  }, []);

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear()
      alert('Storage successfully cleared!')
    } catch (e) {
      alert('Failed to clear the async storage.')
    }
  }

  const onChangeText = value => setInput(value);

  const onSubmitEditing = () => {
    if (!input) return;

    saveData(input);
    setInput('');
  };
};

export default App;