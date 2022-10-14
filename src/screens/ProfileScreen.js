import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';

const ProfileScreen = () => {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
          marginTop: 50
        }}
      >Profile Screen</Text>
    <Button
      onPress={() => navigation.navigate('Login')}
      title="Log in"
      width='80%'
    />
    <Button
      onPress={() => navigation.navigate('Register')}
      title="Register"
      width='80%'
    />
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileScreen;