import React, {useState} from 'react';
import { View, Text} from 'react-native';
import styles from './styles';
import product from '../../data/product';
import {Picker} from '@react-native-picker/picker';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
const ProductScreen = () => {
    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
    const [selectedQuantity, setSelectedQuantity] = useState(0);
    
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

            <QuantitySelector quantity={selectedQuantity} setQuantity={setSelectedQuantity}/>

            {/* button */}
            <Button text={'Add To Cart'} onPress={() => {}}/>
            
        </View>
    )
}

export default ProductScreen;