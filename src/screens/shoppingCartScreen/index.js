import React, {useState} from 'react';
import {View,StyleSheet, Text, FlatList} from 'react-native';
import CartProductItem from '../../components/cartProductItem';
import products from '../../data/cart';

const ShoppingCartScreen = () => {
    
    return (
        <View style={styles.page}>
             <FlatList
                data ={products}
                renderItem={({item}) => (
                   
                        <CartProductItem cartItem={item} />
                )}
                showsVerticalScrollIndicator={false}
             >
            </FlatList> 
        </View>
    )
}
const styles = StyleSheet.create({
    page: {
        width: '100%',
        padding: 10
    },
})

export default ShoppingCartScreen;