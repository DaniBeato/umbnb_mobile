import Reac from 'react'
import { View, ViewPropTypes, StyleSheet } from 'react-native'
import StyledText from './StyledText.jsx'
import Constants from 'expo-constants'
import theme from '../theme.js'

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    text: {
        color:theme.appBar.textPrimary
    }
})

const AppBar = () => {
    return (
        <View style={styles.container}>
            <StyledText fontWeight='bold' style={styles.text}>
               Houses
            </StyledText>    
        </View>
    )
}


export default AppBar