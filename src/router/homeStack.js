import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, SafeAreaView, TextInput} from 'react-native';
import HomeScreen from '../screens/homeScreen';
import ProductScreen from '../screens/ProductScreen';
import Feather from 'react-native-vector-icons/Feather';


const Stack = createStackNavigator();

const HeaderComponent = ({searchValue, setSearchValue}) => {
    return (
        <SafeAreaView style={{backgroundColor: '#22e3d0'}}>
            <View 
                style={{
                    margin: 10, 
                    padding: 5, 
                    backgroundColor: 'white',
                    flexDirection: 'row',
                    alignItems: 'center',
                    }}>
                <Feather name="search" size={20} />
                <TextInput
                    value={searchValue}
                    onChangeText={setSearchValue}
                    style={{height: 40, marginLeft: 10 }}  
                    placeholder = "Search..." />

            </View>
        </SafeAreaView>
            
    )
}
const HomeStack = () => {
    const [searchValue, setSearchValue ] = useState('');
    return (
        
            <Stack.Navigator screenOptions={{
            header: () => <HeaderComponent searchValue={searchValue} setSearchValue={setSearchValue}/>
                }}>
                <Stack.Screen   
                    
                    name="HomeScreen" 
                    options={{title: 'Home'}}>
                        {() => <HomeScreen searchValue={searchValue} />}
                </Stack.Screen>
                <Stack.Screen   
                    component={ProductScreen}  
                    name="ProductDetails" />
            </Stack.Navigator>
        
        
    )
}

export default HomeStack;