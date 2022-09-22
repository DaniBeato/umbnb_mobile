import React from 'react'
import {View, StyleSheet} from 'react-native'
import theme from  '../theme.js'

const styles = StyleSheet.create({
    view: {
        flexDirection: theme.flexDirection.row,
        justifyContent: theme.justifyContent.spaceAround
    },
    flexDirectionColumns: {
        flexDirection: theme.flexDirection.column
    },
    justifyContentSpaceBetween: {
        justifyContent: theme.justifyContent.spaceBetween
    },
    justifyContentSpaceBefore: {
        justifyContent: theme.justifyContent.spaceBefore
    }, 
    justifyContentSpaceAfter: {
        justifyContent: theme.justifyContent.spaceAfter
    }
    
})

export default function StyledView ({children, flexDirection, justifyContent, ...restOfProps}) {
    const viewStyles = [
        styles.view,
        flexDirection === 'column' && styles.flexDirectionColumns,
        justifyContent === 'space-between' && styles.justifyContentSpaceBetween,
        justifyContent === 'space-after' && styles.justifyContentSpaceAfter,
        justifyContent === 'space-before' && styles.justifyContentSpaceBefore
    ]
    return(
        <View style={viewStyles} {...restOfProps}>
            {children}
        </View>
    )
}