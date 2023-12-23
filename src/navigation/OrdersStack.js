import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Orders from '../Screens/Orders'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../Components/Header';

const Stack = createNativeStackNavigator();

const OrdersStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Orders'
            screenOptions={({ route }) => {
                return {
                    header: () => <Header title='Ordenes' />
                }
            }}
        >
            <Stack.Screen name="Orders" component={Orders} />
            
        </Stack.Navigator>
    )
}

export default OrdersStack

const styles = StyleSheet.create({})