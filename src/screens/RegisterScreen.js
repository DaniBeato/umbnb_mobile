import React, { useState } from 'react';
import { StyleSheet, Switch, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import SelectList from 'react-native-dropdown-select-list';
import PhoneInput from 'react-native-phone-number-input';
import Columns from '../components/Columns';
import Text from '../components/Text';
import Logo from '../components/Logo';
import Input from '../components/TextInput';
import Button from '../components/Button';


const RegisterScreen = () => {

  const navigation = useNavigation();

  //PhoneNumber
  const [phoneNumber, setPhoneNumber] = useState('');
  //Switch
  const [isEnable, setIsEnable] = useState(false);
  const toggleSwitch = () => setIsEnable(previousState => !previousState);
  //SelectList Gender
  const [selected, setSelected] = useState("");
  const data = [
    {key: 0, value: 'Male'},
    {key: 1, value: 'Female'},
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
      <StatusBar style="auto" backgroundColor='white' />
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
      <Input placeholder="Age" keyboardType='numeric' />
      <Input placeholder="Email" />
      <PhoneInput
        defaultValue={phoneNumber}
        defaultCode='AR'
        withShadow
        onChangeFormattedText={text => {
          setPhoneNumber(text);
        }}
        containerStyle={styles.phoneInput}
        textContainerStyle={styles.textContainer}
      />
      <Columns
        alignItems = 'baseline'
        justifyContent = 'space-between'
        marginTop = '15px'
        marginBottom = '0px'
        columnLeft = {
          <Text title="Gender"/>
        }
        columnRight = {
          <SelectList
            data={data}
            setSelected={setSelected}
            search={false}
            inputStyles={{ width: '60%'}}
          />
        }
      />
      <Columns
        alignItems = 'baseline'
        justifyContent = 'space-between'
        marginTop = '15px'
        columnLeft = {
          <Text title="Province"/>
        }
        columnRight = {
          <SelectList
            data={dataProvince}
            setSelected={setSelectedProvince}
            inputStyles={{ width: '60%'}}
            search={false}
          />
        }
      />
      <Columns
          alignItems = 'flex-start'
          justifyContent = 'space-between'
          marginTop = '15px'
          width='80%'
          columnLeft = {
            <Text title="Host" />
          }
          columnRight = {
            <Switch style={{ padding: 6 }}
              trackColor={{false: "#767577", true: "lightgreen"}}
              thumbColor={isEnable ? "#ff565b" : "#f4f3f4"}
              onValueChange={toggleSwitch}
              value={isEnable}
            />
          }
      />
      <Input placeholder="Password" secureTextEntry={true} />
      <Input placeholder="Confirm Password" secureTextEntry={true} />
      <Button
        onPress={() => navigation.navigate('Home')}
        width='80%'
        title="Sign Up"
      />
      <Columns
        width='100%'
        marginBottom='40px'
        columnLeft = {
        <Text
          title='Already have an account?'
          color='gray'
        />
        }
        columnRight = {
        <Button
          onPress={() => navigation.navigate('Login')}
          bgColor='white'
          border='1px'
          marginTop='10px'
          width='30%'
          color='#000'
          title="Log in"
        />
        }
      />
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
  phoneInput: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    marginTop: 20,
  },
  textContainer: {
    borderRadius: 10,
  },
});

export default RegisterScreen;