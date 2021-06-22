import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen';
import ShoppingCartScreen from '../screens/shoppingCartScreen'
import Entypo from 'react-native-vector-icons/Entypo';
const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator 
            tabBarOptions={{
                showLabel: false, 
                inactiveBackgroundColor: '#ffbd7e', 
                activeTintColor: '#e47911'}}>
            <Tab.Screen 
                component={HomeScreen} 
                name="Home" 
                options = {{
                    tabBarIcon: ({color}) => (<Entypo name="home" color={color} size={25} />),
                }}
            /> 
            <Tab.Screen 
                component={HomeScreen} 
                name="profile"
                options= {{
                    tabBarIcon: ({color}) => (<Entypo name="user" color={color} size={25}/>)
                }} 
                />
            <Tab.Screen 
                component={ShoppingCartScreen} 
                name="shoppingCart"
                options= {{
                    tabBarIcon: ({color}) => (<Entypo name="shopping-cart" color={color} size={25}/>)
                }}
                />
            <Tab.Screen 
                component={HomeScreen} 
                name="more" 
                options= {{
                    tabBarIcon: ({color}) => (<Entypo name="menu" color={color} size={25}/>)
                }}
                />
        </Tab.Navigator>
    )
}

export default BottomTabNav;