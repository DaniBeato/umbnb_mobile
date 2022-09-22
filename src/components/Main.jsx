import React from 'react';
import Constants from 'expo-constants'
import {Text, View} from 'react-native'
import HousesList from './HousesList.jsx'

const Main = () => {
    return (
        <View style={{marginTop: Constants.statusBarHeight, flexGrow:1 }}>
            <HousesList />
        </View>

    )
}
export default Main