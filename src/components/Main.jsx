import React from 'react';
import {View} from 'react-native'
import HousesList from './HousesList.jsx'
import AppBar from './AppBar.jsx'

const Main = () => {
    return (
        <View style={{ flex:1 }}>
            <AppBar />
            <HousesList />
        </View>
    )
}
export default Main