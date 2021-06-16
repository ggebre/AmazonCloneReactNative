import React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
const ProductItem = (props) => {
    // id: '1',
    // title: "Clean Architecture: A Craftsman's Guide to Software Structure and Design",
    // image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
    // avgRating: 4.2,
    // ratings: 1325,
    // price: 20.98,
    // oldPrice: 24.06,
   
    const {title, image, avgRating, ratings, price, oldPrice } = props.item;
    
    return (
            <View style= {styles.root}>
                <Image style={styles.image} source={{uri: `${image}`}} />
                <View style= {styles.rightContainer}>
                    <Text style={styles.title} numberOfLines={3}>{title}</Text>
                    <View style={styles.ratingsContainer} >
                        <FontAwesome 
                            style={styles.star} 
                            name="star" 
                            size={18} 
                            color={'#e47911'} />
                        <FontAwesome 
                            style={styles.star} 
                            name="star" 
                            size={18} 
                            color={'#e47911'} />
                        <FontAwesome 
                            style={styles.star} 
                            name="star" 
                            size={18} 
                            color={'#e47911'} />
                        <FontAwesome 
                            style={styles.star} 
                            name="star-half-full" 
                            size={18} 
                            color={'#e47911'} />
                        <FontAwesome 
                            style={styles.star} 
                            name="star-o" 
                            size={18} 
                            color={'#e47911'} />
                        <Text>{ratings}</Text>
                    </View>
                    <Text style={styles.price}> 
                        from ${price} 
                        <Text style={styles.oldPrice}>  ${oldPrice}</Text>
                    </Text>
                </View>
            </View>
    )
    
}
export default ProductItem;