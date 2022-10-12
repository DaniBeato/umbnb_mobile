import React, { useState } from 'react';
import {
  StyleSheet, View, SafeAreaView, Switch,
  ScrollView, Modal, TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SelectList from 'react-native-dropdown-select-list';
import Text from '../components/Text';
import Logo from '../components/Logo';
import Input from '../components/TextInput';
import Button from '../components/Button';


const RegisterScreen = () => {

  const navigation = useNavigation();

  //Switch
  const [isEnable, setIsEnable] = useState(false);
  const toggleSwitch = () => setIsEnable(previousState => !previousState);
  //SelectList Gender
  const [selected, setSelected] = useState("");
  const data = [
    {key: 1, value: 'Male'},
    {key: 2, value: 'Female'},
    {key: 3, value: 'Other'},
    {key: 4, value: 'Prefer not to say'},
  ];
  //SelectList Province
  const [selectedProvince, setSelectedProvince] = useState("");
  const dataProvince = [
    {key: 1, value: 'Buenos Aires'},
    {key: 2, value: 'Catamarca'},
    {key: 3, value: 'Chaco'},
    {key: 4, value: 'Chubut'},
    {key: 5, value: 'Córdoba'},
    {key: 6, value: 'Corrientes'},
    {key: 7, value: 'Entre Ríos'},
    {key: 8, value: 'Formosa'},
    {key: 9, value: 'Jujuy'},
    {key: 10, value: 'La Pampa'},
    {key: 11, value: 'La Rioja'},
    {key: 12, value: 'Mendoza'},
    {key: 13, value: 'Misiones'},
    {key: 14, value: 'Neuquén'},
    {key: 15, value: 'Río Negro'},
    {key: 16, value: 'Salta'},
    {key: 17, value: 'San Juan'},
    {key: 18, value: 'San Luis'},
    {key: 19, value: 'Santa Cruz'},
    {key: 20, value: 'Santa Fe'},
    {key: 21, value: 'Santiago del Estero'},
    {key: 22, value: 'Tierra del Fuego'},
    {key: 23, value: 'Tucumán'},
  ];

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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          width: '80%',
          marginTop: 15,
        }}
      >
        <Text title="Gender"/>
        <SelectList
          data={data}
          setSelected={setSelected}
          search={false}
          inputStyles={{ width: '60%'}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          width: '80%',
          marginTop: 15,
        }}
      >
        <Text title="Province"/>
        <SelectList
          data={dataProvince}
          setSelected={setSelectedProvince}
          inputStyles={{ width: '60%'}}
          search={false}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'stretch',
          justifyContent: 'space-between',
          width: '80%',
          marginTop: 15,
        }}>
        <Text title="Host"/>
        <Switch style={{ alignItems: 'flex-end'}}
          trackColor={{false: "#767577", true: "lightgreen"}}
          thumbColor={isEnable ? "#ff565b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isEnable}
        />
      </View>
      <Input placeholder="Password" secureTextEntry={true} />
      <Button
        onPress={() => navigation.navigate('Home')}
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