import React from 'react';
import { View, FlatList, Image, StyleSheet, useWindowDimensions } from 'react-native';


const ImageCarousol = ({images}) => {
    const windowWidth = useWindowDimensions().width;
    const renderItem = ({item}) => (
        <Image 
            style={[styles.image, {width: windowWidth - 40}]} 
            source={{uri: `${item}`}} 
        />
        
    )
    return (
        <View style={styles.root}>
            <FlatList
                data={images}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator = {false}
                // 
                snapToInterval={windowWidth - 20}
                snapToAlignment={'center'}
                decelerationRate={'fast'}
                >
            </FlatList>
            
        </View>
    )
}
const styles = StyleSheet.create({
    root: {
      

    },
    image: {
        margin: 10,
        height: 250,
        resizeMode: 'contain',
    }
})
export default ImageCarousol;