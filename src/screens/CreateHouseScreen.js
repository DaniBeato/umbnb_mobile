import React, { useState } from 'react';
import { StyleSheet, ScrollView, StatusBar, Alert, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SelectList from 'react-native-dropdown-select-list';
import Text from '../components/Text';
import Input from '../components/TextInput';
import Button from '../components/Button';
import Columns from '../components/Columns';
import * as ImagePicker from 'expo-image-picker';


const CreateHouseScreen = () => {

  const navigation = useNavigation();
  
  
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

  

  const [selectedImage, setSelectedImage] = React.useState(null);

  let openImagePickerAsync = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    if (pickerResult.cancelled === true) {
        return;
    }
    setSelectedImage({ localUri: pickerResult.uri });
  };
  
  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
      </View>
    );
  }


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
        <Input placeholder="Name" />
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
        <Input placeholder="City" />
        <Input placeholder="Price" keyboardType='numeric' />
        <Input placeholder="Rooms Number" keyboardType='numeric' />
        <Input placeholder="Persons Number" keyboardType='numeric' />
        <Input placeholder="House Type" />
        <Button
            onPress={openImagePickerAsync}
            bgColor='white'
            border='1px'
            marginTop='20px'
            margin='20px'
            width='50%'
            color='#000'
            title="Select house image"
            />
        <Button
            onPress={() => {Alert.alert('Create House','House created sucessfully!');navigation.navigate('HomeScreen')}}
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