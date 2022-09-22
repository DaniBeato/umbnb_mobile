import React from 'react'
import {FlatList , Text} from 'react-native'
import houses from '../data/houses.js'
import HouseItem from './HouseItem.jsx'

const HousesList = () => {
    return (
        <FlatList data={houses} 
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({item: house}) => (
            <HouseItem {...house}/>

        )}
        />
        )
    }

export default HousesList