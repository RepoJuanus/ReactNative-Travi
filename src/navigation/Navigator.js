import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import ItemDetail from '../Screens/ItemDetail';
import ItemListCategories from '../Screens/ItemListCategories';
import Header from '../Components/Header';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={({route}) => {
                    return {
                        header : () => <Header title={
                                                    route.name === 'Home' ? 'Categorias':
                                                    route.name === 'Categories' ? route.params.category :
                                                    'Detalles'
                        }/>
                    }
                } }
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Categories" component={ItemListCategories} />
                <Stack.Screen name="Details" component={ItemDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator

const styles = StyleSheet.create({})