import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen';
import ShoppingCartScreen from '../screens/shoppingCartScreen'

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen component={HomeScreen} name="Home" />
            <Tab.Screen component={HomeScreen} name="profile" />
            <Tab.Screen component={ShoppingCartScreen} name="shoppingCart" />
            <Tab.Screen component={HomeScreen} name="more" />
        </Tab.Navigator>
    )
}

export default BottomTabNav;