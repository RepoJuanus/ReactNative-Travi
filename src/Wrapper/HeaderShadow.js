import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'

const HeaderShadow = ({ children, style }) => {
  return (
    <View style={{ ...styles.container, ...style }}>
      {children}
    </View>
  )
}

export default HeaderShadow

const styles = StyleSheet.create({
  container: {
    /* Android */
    elevation: 10,
    /* IOS */
    shadowColor: colors.color3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
  }
})