import React, { useState } from 'react';
import { Alert, StyleSheet, Switch, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import SelectList from 'react-native-dropdown-select-list';
import PhoneInput from 'react-native-phone-number-input';
import user from '../api/user';
import Columns from '../components/Columns';
import Text from '../components/Text';
import Logo from '../components/Logo';
import Input from '../components/TextInput';
import Button from '../components/Button';


const RegisterScreen = () => {

  const navigation = useNavigation();

  const [firtsName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
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
    {key: 'Buenos Aires', value: 'Buenos Aires'},
    {key: 'Catamarca', value: 'Catamarca'},
    {key: 'Chaco', value: 'Chaco'},
    {key: 'Chubut', value: 'Chubut'},
    {key: 'Córdoba', value: 'Córdoba'},
    {key: 'Corrientes', value: 'Corrientes'},
    {key: 'Entre Ríos', value: 'Entre Ríos'},
    {key: 'Formosa', value: 'Formosa'},
    {key: 'Jujuy', value: 'Jujuy'},
    {key: 'La Pampa', value: 'La Pampa'},
    {key: 'La Rioja', value: 'La Rioja'},
    {key: 'Mendoza', value: 'Mendoza'},
    {key: 'Misiones', value: 'Misiones'},
    {key: 'Neuquén', value: 'Neuquén'},
    {key: 'Río Negro', value: 'Río Negro'},
    {key: 'Salta', value: 'Salta'},
    {key: 'San Juan', value: 'San Juan'},
    {key: 'San Luis', value: 'San Luis'},
    {key: 'Santa Cruz', value: 'Santa Cruz'},
    {key: 'Santa Fe', value: 'Santa Fe'},
    {key: 'Santiago del Estereo', value: 'Santiago del Estero'},
    {key: 'Tierra del Fuego', value: 'Tierra del Fuego'},
    {key: 'Tucumán', value: 'Tucumán'},
  ];

  const handleRegister = () => {
    console.log('**********');
    const usr = {
      name: firtsName,
      lastname: lastName,
      age: age,
      email: email,
      phoneNumber: phoneNumber,
      sex: selected,
      province: selectedProvince,
      host: isEnable,
      password: password,
    };
    user.post(usr)
      .then((response) => {
        console.log(response.data);
        if (response.status === 200) {
          console.log('Usuario creado');
          console.log(response.data);
          Alert.alert('Register','User created');
          navigation.replace('Login');
        } else {
          throw new Error('Error');
        }
      })
      .catch((error) => { throw error; });
  };

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
      <Input placeholder="First Name"
        value={firtsName}
        onChangeText={text => setFirstName(text)}
      />
      <Input placeholder="Last Name"
        value={lastName}
        onChangeText={text => setLastName(text)}
      />
      <Input placeholder="Age"
        keyboardType='numeric'
        value={age}
        onChangeText={text => setAge(text)}
      />
      <Input placeholder="Email"
        keyboardType='email-address'
        value={email}
        onChangeText={text => setEmail(text)}
      />
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
      <Input placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Input placeholder="Confirm Password"
        secureTextEntry={true}
        value={password2}
        onChangeText={text => setPassword2(text)}
      />
      <Button
        onPress={handleRegister}
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