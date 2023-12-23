import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Cart from '../Screens/Cart'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../Components/Header';
import Profile from '../Screens/Profile';

const Stack = createNativeStackNavigator();


const ProfileStack = () => {
  return (
    <Stack.Navigator
            initialRouteName='Profile'
            screenOptions={({ route }) => {
                return {
                    header: () => <Header title='Profile' />
                }
            }}
        >
            <Stack.Screen name="Profile" component={Profile} />
            
        </Stack.Navigator>
  )
}

export default ProfileStack

const styles = StyleSheet.create({})