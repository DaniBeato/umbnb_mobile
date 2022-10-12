import React, { useState } from 'react';
import {
  StyleSheet, View, SafeAreaView, Switch,
  ScrollView, Modal, TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Text from '../components/Text';
import Logo from '../components/Logo';
import Input from '../components/TextInput';
import Button from '../components/Button';
import { ModalPicker } from '../components/ModalPicker';


const RegisterScreen = () => {

  const navigation = useNavigation();

  //Switch
  const [isEnable, setIsEnable] = useState(false);
  const toggleSwitch = () => setIsEnable(previousState => !previousState);
  //Modal Picker
  const [chooseData, setchooseData] = useState('Gender');
  const [isModalVisible, setisModalVisible] = useState(false);
  const changeModalVisibility = (bool) => {
    setisModalVisible(bool);
  }
  const setData = (option) => {
    setchooseData(option);
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Logo
        marginTop='80px'
      />
      <Text
        title='Create an account to start planning your next trip.'
        color='gray'
        fontSize='15px'
        marginTop='0px'
      />
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input placeholder="Age" />
      <Input placeholder="Email" />
      <Input placeholder="Phone" />
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => changeModalVisibility(true)}
          style={styles.touchableOpacity}
        >
          <Text color='black'>{chooseData}</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType='fade'
          visible={isModalVisible}
          nRequestClose={() => changeModalVisibility(false)}
        >
          <ModalPicker
            changeModalVisibility={changeModalVisibility}
            setData={setData}
          />
        </Modal>
      </SafeAreaView>
      <Input placeholder="Province" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
          marginTop: 20
        }}>
        <Text title="Host" textAlign="center" />
        <Switch
          trackColor={{false: "#767577", true: "lightgreen"}}
          thumbColor={isEnable ? "#ff565b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnable}
        />
      </View>
      <Input placeholder="Password" secureTextEntry={true} />
      <Button
        onPress={() => alert('Register')}
        width='80%'
        title="Sign Up"
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          width: '100%',
          marginTop: 20,
          marginBottom: 20
        }}>
        <Text
          title='Already have an account?'
          color='gray'
        />
        <Button
          onPress={() => navigation.navigate('Login')}
          bgColor='white'
          border='1px'
          marginTop='10px'
          width='30%'
          color='#000'
          title="Log in"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 20,
    width: '80%',
  },
  text: {
    marginVertical: 10,
    fontSize: 16,
  },
  touchableOpacity: {
    backgroundColor: 'white',
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: 'gray',
    width: '100%',
    padding: 10,
    paddingStart: 30,
    marginTop: 20,
    borderRadius: 10,
  },
});

export default RegisterScreen;