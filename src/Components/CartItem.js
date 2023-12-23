import { View, StyleSheet, Text} from 'react-native'
import React from 'react'
import { colors } from '../Global/colors'
import {MaterialIcons} from "@expo/vector-icons"

const CartItem = ({item, navigation, route}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.text}>{item.brand}</Text>
      <Text style={styles.text}>$ {item.price}</Text>
      <Text style={styles.text}>cantidad: {item.quantity} u.</Text>
      </View>
      <MaterialIcons style={styles.icon} name='delete' size={25} color='black'/>
      </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        width: "90%",
        backgroundColor: colors.color3,
        marginHorizontal: "5%",
        marginVertical: 8,
        margin: 8,
        padding: 5,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        // gap: 20,
    },
    textContainer:{
      width: '90%',
      gap:10
    },
    text:{
      fontSize: 17,
      fontFamily: 'Josefin'
    },
    text_min:{
      fontSize: 15,
      fontFamily: 'Josefin'
    },
    icon:{
      width: '10%',
      justifyContent:'flex-end',
      alignSelf:'auto'
    }
})