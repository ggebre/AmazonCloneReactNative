import React from 'react';
import {View,StyleSheet, FlatList} from 'react-native';
import ProductItem from '../../components/productItem/index';
import products from '../../data/products';

const HomeScreen = () => {
    return (
        <View style={styles.page}>
             <FlatList
                data ={products}
                renderItem={({item}) => <ProductItem item={item} />}
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

export default HomeScreen;