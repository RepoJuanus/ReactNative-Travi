import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import allOrders from '../Data/orders.json'
import OrderItem from '../Components/OrderItem'

const Orders = () => {
  return (
    <FlatList
    data={allOrders}
    keyExtractor={order => order.id}
    renderItem={({item})=><OrderItem order={item}/>}
    />
  )
}

export default Orders

const styles = StyleSheet.create({})