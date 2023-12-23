import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../Screens/Home';
import ItemDetail from '../Screens/ItemDetail';
import ItemListCategories from '../Screens/ItemListCategories';
import Header from '../Components/Header';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ShopStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Home'
            screenOptions={({ route }) => {
                return {
                    header: () => <Header title={
                        route.name === 'Home' ? 'Categorias' :
                            route.name === 'Categories' ? route.params.category :
                                'Detalles'
                    } />
                }
            }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Categories" component={ItemListCategories} />
            <Stack.Screen name="Details" component={ItemDetail} />
        </Stack.Navigator>
    )
}

export default ShopStack

const styles = StyleSheet.create({})