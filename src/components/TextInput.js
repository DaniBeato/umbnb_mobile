import React from "react";
import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
    center: {
        alignItems: "center"},
    textInput: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        paddingStart: 30,
        width: '80%',
        height: 50,
        marginTop: 20,
        borderRadius: 10,
      },
});

const Input = ({ placeholder }) => {
    return (
        <TextInput style={styles.textInput} placeholder={placeholder} />
    );
}

export default Input;