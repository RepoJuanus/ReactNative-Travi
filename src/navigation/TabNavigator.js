import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStack from './ShopStack';
import CartStack from './CartStack';
import ProfileStack from './ProfileStack';
import OrdersStack from './OrdersStack';
import { colors } from '../Global/colors';
import TabIcon from '../Components/TabIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}>
                <Tab.Screen 
                    name="ShopStack" 
                    component={ShopStack}
                    options={{
                        tabBarIcon: ({focused}) => <TabIcon icon='shop' label='Productos' focused={focused}/>
                    }} />
                <Tab.Screen 
                name="CartStack" 
                component={CartStack} 
                options={{
                    tabBarIcon: ({focused}) => <TabIcon icon='shopping-cart' label='Carrito' focused={focused}/>
                }} />
                <Tab.Screen 
                name="OrdersStack" 
                component={OrdersStack} 
                options={{
                    tabBarIcon: ({focused}) => <TabIcon icon='list' label='Ordenes' focused={focused}/>
                }}/>
                <Tab.Screen 
                name="ProfileStack" 
                component={ProfileStack} 
                options={{
                    tabBarIcon: ({focused}) => <TabIcon icon='login' label='LogIn' focused={focused}/>
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: colors.color2,
        elevation: 4,
        position: 'absolute',
        alignItems:'baseline',
        bottom: 20,
        left: 20,
        right: 20,
        borderRadius: 20,
        height: 90,

    }
})