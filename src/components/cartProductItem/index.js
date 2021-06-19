import React, { useState } from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../../components/QuantitySelector';

import styles from './styles';
const CartProductItem = (props) => {

    const {quantity, id, option, item } = props.cartItem
    const {title, image, avgRating, ratings, price, oldPrice } = item;
    const [productQuantity, setProductQuantity] = useState(quantity)
    // console.log(productQuantity, id)
    // update cart when quantity changes
    return (
        <View style= {styles.root}>
            <View style= {styles.row}>
                <Image style={styles.image} source={{uri: `${image}`}} />
                    <View style= {styles.rightContainer}>
                        <Text style={styles.title} numberOfLines={3}>{title}</Text>
                        <View style={styles.ratingsContainer} >
                            {[0,0,0,0,0].map((elem, ind) => (
                                <FontAwesome 
                                    style={styles.star} 
                                    name={ind < Math.floor(avgRating) ? "star" : ind < Math.ceil(avgRating) ? "star-half-full" : "star-o"} 
                                    size={18} 
                                    color={'#e47911'} 
                                    key={`${elem.id} - ${ind}`}
                                />
                            ))}
                            <Text>{ratings}</Text>
                        </View>
                        <Text style={styles.price}> 
                            from ${price} 
                            {oldPrice && <Text style={styles.oldPrice}>  ${oldPrice}</Text>}
                        </Text>
                        
                    </View>
            </View>
            <View style={styles.quantityContainer} >
                <QuantitySelector quantity = {productQuantity} setQuantity={setProductQuantity}/>
            </View>
        </View>
            
    )
    
}
export default CartProductItem;