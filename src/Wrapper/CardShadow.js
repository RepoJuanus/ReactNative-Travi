import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'

const CardShadow = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
      {children}
    </View>
  )
}

export default CardShadow

const styles = StyleSheet.create({
    container: {
        /* Android */
        elevation: 10,
        /* IOS */
        shadowColor: colors.color5,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
    }
})