import React, {useState} from 'react';
import { View, Text, ScrollView} from 'react-native';
import styles from './styles';
import product from '../../data/product';
import {Picker} from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';
import QuantitySelector from '../../components/QuantitySelector';
import Button from '../../components/Button';
import ImageCarousol from '../../components/ImageCarousol';
const ProductScreen = () => {
    // gets the route parameters or info send from navigation 
    const route = useRoute();
    // consoles the id of the item selected in the homescreen
    console.log(route.params.id)
    const [selectedOption, setSelectedOption] = useState(product.options ? product.options[0] : null);
    const [selectedQuantity, setSelectedQuantity] = useState(0);
    
    return (
        <ScrollView style={styles.root} showsVerticalScrollIndicator={false}>
            
            <Text style={styles.title}> {product.title} </Text>
            {/* Image carousel  */}
            <View>
                <ImageCarousol images={product.images} />

            </View>

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
            <Button 
                text={'Add To Cart'} 
                onPress={() => {}}
                containerStyle={{backgroundColor: '#e3c985'}}/>
            <Button 
                text={'Buy Now'} 
                onPress={() => {}}/>
        </ScrollView>
    )
}

export default ProductScreen;