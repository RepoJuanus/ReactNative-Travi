import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons'
import { colors } from '../Global/colors'



const OrderItem = ({ order }) => {
  const totalOrderPrice = order.items.reduce((acc, product) => acc + (product.quantity * product.price), 0)

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>ORDEN #: {order.id}</Text>
        <Text style={styles.text2}>Fecha: {new Date(order.createdAt).toLocaleString()}</Text>
        <Text style={styles.text2}>Total: $ {totalOrderPrice}</Text>
      </View>
      <EvilIcons style={styles.icon} name='search' color='black' size={28} />
    </View>
  )
}

export default OrderItem

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
    alignItems: 'center',
    justifyContent: 'space-between',
    // gap: 20,
  },
  textContainer: {
    width: '90%',
    gap: 10
  },
  text1: {
    fontSize: 15,
    fontWeight:'bold',
    fontFamily: 'Josefin'
  },
  text2: {
    fontSize: 17,
    fontWeight: 'normal',
    fontFamily: 'Josefin'
  },
  text_min: {
    fontSize: 15,
    fontFamily: 'Josefin'
  },
  icon: {
    width: '10%',
    justifyContent: 'flex-end',
    alignSelf: 'auto'
  }
})