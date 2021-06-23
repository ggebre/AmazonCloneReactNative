import React, {useState} from 'react';
import {View,StyleSheet, Text, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CartProductItem from '../../components/cartProductItem';
import products from '../../data/cart';
import Button from '../../components/Button';

const ShoppingCartScreen = () => {
    const totalPrice = products.reduce((sumPrice, product) => sumPrice + product.quantity * product.item.price, 0);
    const totalItems = products.reduce((sumItems, item) => sumItems + item.quantity, 0);

    const navigation = useNavigation();
    const onCheckout = () => {
        navigation.navigate("Address");
    }
    return (
        <View style={styles.page}>
            {/* <View>
                <Text style={{fontSize: 18}}>Subtotal ({totalItems}) items: 
                            <Text style={{color: '#e47911', fontWeight: 'bold'}}>${totalPrice.toFixed(2)}</Text>
                </Text>
                <Button 
                    text="Proceed to Checkout"
                    onPress={() => console.log("Go to Checkout!")}
                    containerStyle={{backgroundColor: '#f7e300', borderColor: '#f7e300'}}/>
            </View> */}
             <FlatList
                data ={products}
                renderItem={({item}) => (
                    <CartProductItem cartItem={item} />
                )}
                showsVerticalScrollIndicator={false}
                // adds header component to the flatlist
                ListHeaderComponent = {() => (
                    <View>
                        <Text style={{fontSize: 18}}>Subtotal ({totalItems}) items: 
                                    <Text style={{color: '#e47911', fontWeight: 'bold'}}>${totalPrice.toFixed(2)}</Text>
                        </Text>
                        <Button 
                            text="Proceed to Checkout"
                            onPress={onCheckout}
                            containerStyle={{backgroundColor: '#f7e300', borderColor: '#f7e300'}}/>
                    </View>
                )}
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