import React from 'react'
import {View, Text} from 'react-native'
import StyledText from './StyledText.jsx'
import StyledView from './StyledView.jsx'


const parseThousands = value => {
    return value >= 1000
    ? `${Math.round(value/100) / 10}k`
    : String(value)
}



const HousesStats = props => {
    return (
        <View>    
            <StyledView>
                <View>
                    <StyledText align='center' fontWeight='bold'>Rooms</StyledText>
                    <StyledText align='center'>{props.roomsNumber}</StyledText>
                </View>
                <View>
                    <StyledText align='center' fontWeight='bold'>Persons</StyledText>
                    <StyledText align='center'>{props.personsNumber}</StyledText>
                </View>
                <View>
                    <StyledText align='center' fontWeight='bold'>Review</StyledText>
                    <StyledText align='center'>{props.review}</StyledText>
                </View>
                <View>
                    <StyledText align='center' fontWeight='bold'>Type</StyledText>
                    <StyledText align='center'>{props.type}</StyledText>
                </View>
            </StyledView>
            <View>
                <Text> </Text>    
            </View>     
            <StyledView>
                <View>    
                    <StyledText align='center' fontWeight='bold'>Price</StyledText>
                    <StyledText align='center'>{parseThousands (props.price)}</StyledText>
                </View>
                <View>
                    <StyledText align='center' fontWeight='bold'>Province</StyledText>
                    <StyledText align='center'>{props.province}</StyledText>
                </View>
                <View>
                    <StyledText align='center' fontWeight='bold'>City</StyledText>
                    <StyledText align='center'>{props.city}</StyledText>
                </View>
                <View>
                    <Text>  </Text>
                </View>
            </StyledView>
        </View>    
    )
}


export default HousesStats