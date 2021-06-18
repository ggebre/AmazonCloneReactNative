import React, { useState, useCallback } from 'react';
import { View, FlatList, Image, StyleSheet, useWindowDimensions } from 'react-native';



const ImageCarousol = ({images}) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const windowWidth = useWindowDimensions().width;
    const renderItem = ({item}) => (
        <Image 
            style={[styles.image, {width: windowWidth - 40}]} 
            source={{uri: `${item}`}} 
        />
        
    )
    const onViewableItemsChanged = useCallback(({ viewableItems}) => {
        if(viewableItems.length > 0){
            setActiveIndex(viewableItems[0].index )
        }
        
    }, [])
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

                // to get the viable image index 
                viewabilityConfig={{
                    viewAreaCoveragePercentThreshold: 50, 
                }}
                onViewableItemsChanged = {onViewableItemsChanged}
                >
            </FlatList>
            <View style={styles.dots} >
                {images.map((image, index) => (
                <View style={[
                    styles.dot,
                    {
                        backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed'
                    }
                ]} />
                ))}
            </View>
        
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
    },
    dots: {
        flexDirection: 'row',
        justifyContent: 'center'
    },

    dot: {
        width: 10,
        height: 10,
        borderRadius: 10, 
        borderWidth: 1, 
        backgroundColor: '#ededed',
        borderColor: '#c9c9c9',
        margin: 5
    },
    
})
export default ImageCarousol;