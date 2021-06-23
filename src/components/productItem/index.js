import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
const ProductItem = (props) => {
    const navigation = useNavigation();
    
    const {id, title, image, avgRating, ratings, price, oldPrice } = props.item;
    
    const onPress = () => {
        
       navigation.navigate('ProductDetails', {id})
    }
    return (
            <Pressable onPress={onPress} style= {styles.root}>
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
                            key={`${elem.id} - ${ind}`}/>
                        ))}
                        <Text>{ratings}</Text>
                    </View>
                    <Text style={styles.price}> 
                        from ${price} 
                        {oldPrice && <Text style={styles.oldPrice}>  ${oldPrice}</Text>}
                    </Text>
                </View>
            </Pressable>
    )
    
}
export default ProductItem;