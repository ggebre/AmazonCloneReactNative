import React from 'react';
import {View,StyleSheet} from 'react-native';
import ProductItem from '../../components/product/index';
import products from '../../data/products';



const HomeScreen = () => {
    return (
        <View style={styles.page}>
            {
                products.map(product => (<ProductItem item={product}/> ) )
            }
              
        </View>
    )
}
const styles = StyleSheet.create({
    page: {
        width: '100%',
        padding: 10
    },
})

export default HomeScreen;