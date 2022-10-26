import React, { useState } from 'react';
import { StyleSheet, ScrollView, StatusBar, Alert, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SelectList from 'react-native-dropdown-select-list';
import api from '../api/house';
import Request from '../api/base';
import user from '../api/user';
import Text from '../components/Text';
import Input from '../components/TextInput';
import Button from '../components/Button';
import Columns from '../components/Columns';
import * as ImagePicker from 'expo-image-picker';
import { registerCustomIconType } from 'react-native-elements';


const CreateHouseScreen = () => {

  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [rooms, setRooms] = useState('');
  const [persons, setPersons] = useState('');
  const [type, setType] = useState('');
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


  const [selectedImage, setSelectedImage] = React.useState(null);
  const [imageUrl, setImageUrl] = React.useState(null);

  // const FormData = global.FormData;

  // let openImagePickerAsync = async () => {
  //   let pickerResult = await ImagePicker.launchImageLibraryAsync();
  //   console.log(pickerResult);
  //   if (pickerResult.cancelled === true) {
  //       return;
  //   }
  //   setSelectedImage({ localUri: pickerResult.uri });
  //   console.log('******************');
  //   const formData = new FormData();
  //   formData.append('file', {
  //       uri: pickerResult.uri,
  //       type: pickerResult.type,
  //   });
  //   const headers = {'Content-Type': 'multipart/form-data'};

  //   const api = new Request('http://198.168.0.10:8080/Umbnb/storage/profile/pic/');
  //   api.post({
  //       headers: headers,
  //       data: formData,
  //       transfromRequest: [(data, headers) => {
  //         return data;
  //       }],
  //   }).then((response) => {
  //       console.log(response);
  //       setImageUrl(response.data);
  //   })
  //   .catch((error) => { throw error; });
  // };

  // if (selectedImage !== null) {
  //   return (
  //     <View style={styles.container}>
  //       <Image
  //         source={{ uri: selectedImage.localUri }}
  //         style={styles.thumbnail}
  //       />
  //     </View>
  //   );
  // }

  const [usr, setUsr] = useState('');
  const getOwner = () => {
  user.getOne(2)
    .then(response => {
      console.log(response.data);
      setUsr(response.data);
    })
    .catch(error => { throw error; });
  };

  console.log(usr);

  const handleCreateHouse = async() => {
    console.log('Creating house...');
    getOwner();
    const dataHouse = {
      name: name,
      province: selectedProvince,
      owner: usr,
      city: city,
      address: address,
      price: price,
      roomsNumber: rooms,
      personsNumber: persons,
      type: type,
      image: 'https://http2.mlstatic.com/D_NQ_NP_2X_983593-MLA40671013294_022020-F.webp',
    };
    await api.post(dataHouse)
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          console.log('House created successfully');
          Alert.alert('Create House','House created sucessfully!');
          navigation.navigate('HomeScreen');
        } else {
          console.log('House not created');
          throw new Error('House not created');
        }
      })
      .catch((error) => { throw error; });
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <StatusBar style="auto" backgroundColor='white' />
        <Text> </Text>
        <Text
            title = 'Create House'
            color = 'gray'
            fontSize = '50px'
            marginTop='0px'
        />
        <Input placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
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
        <Input placeholder="City"
          value={city}
          onChangeText={text => setCity(text)}
        />
        <Input placeholder="Address"
          value={address}
          onChangeText={text => setAddress(text)}
        />
        <Input placeholder="Price"
          keyboardType='numeric'
          value={price}
          onChangeText={text => setPrice(text)}
        />
        <Input placeholder="Rooms Number"
          keyboardType='numeric'
          value={rooms}
          onChangeText={text => setRooms(text)}
        />
        <Input placeholder="Persons Number"
          keyboardType='numeric'
          value={persons}
          onChangeText={text => setPersons(text)}
        />
        <Input placeholder="House Type"
          value={type}
          onChangeText={text => setType(text)}
        />
        <Button
            // onPress={openImagePickerAsync}
            bgColor='white'
            border='1px'
            marginTop='20px'
            margin='20px'
            width='50%'
            color='#000'
            title="Select house image"
            />
        <Button
            onPress={handleCreateHouse}
            width='80%'
            title="Create House"
            margin='0px'
        />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
});

export default CreateHouseScreen;