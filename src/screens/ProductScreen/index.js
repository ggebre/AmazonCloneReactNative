import React, {useState} from 'react';
import { View, Text} from 'react-native';
import styles from './styles';
import product from '../../data/product';
import {Picker} from '@react-native-picker/picker';
const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState('');
    
    return (
        <View>
            <Text style={styles.title}> {product.title} </Text>
            {/* Image carousel  */}

            {/* option selector */}
            <Picker 
                selectedValue={selectedOption}
                onValueChange={(itemValue) => setSelectedOption(itemValue)}
                >
                { product.options.map(option => 
                    <Picker.Item label= {option} value={option} key={option}/>)
                }
            </Picker>
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