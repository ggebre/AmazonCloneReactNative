import React from 'react';
import { View, Text} from 'react-native';
import styles from './styles';
import product from '../../data/product';
const ProductScreen = () => {

    return (
        <View>
            <Text style={styles.title}> {product.title} </Text>
            {/* Image carousel  */}

            {/* option selector */}

            {/* price */}
            <Text style={styles.price}> 
                        from ${product.price} 
                        {product.oldPrice && <Text style={styles.oldPrice}>  ${product.oldPrice}</Text>}
            </Text>

            {/* description */}
            <Text style={styles.description} >
                {product.description}
            </Text>

            {/* Quantity selector */}

            {/* button */}
        </View>
    )
}

export default ProductScreen;