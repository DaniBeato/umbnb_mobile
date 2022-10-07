import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
    return (
        <TouchableOpacity
        onPress={() => alert('Button Pressed')}
        style={styles.button}>
            <Text style={styles.buttonTitle}>{props.title}</Text>
        </TouchableOpacity>
    );
}

export default CustomButton;

const styles = StyleSheet.create({
    center: {
        alignItems: "center"
    },
    button: {
        backgroundColor: '#ff5c5c',
        marginTop: 20,
        padding: 10,
        width: '80%',
        borderRadius: 10,
    },
    buttonTitle: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
    },
});