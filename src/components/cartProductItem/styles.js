import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    
    root: {
        borderWidth: 1, 
        borderColor: '#d1d1d1',
        borderRadius: 10, 
        backgroundColor: '#fff',
        marginVertical: 5, 
    },
    row: {
        flexDirection: 'row',
    },
    quantityContainer: {
        marginVertical: 10,
        marginLeft: 10
    },
    image: {
        flex: 2,
        height: 150,
        resizeMode: 'contain',
    },
    rightContainer: {
        flex: 3,
        padding: 10,
    },
    title: {
        fontSize: 18,

    },
    ratingsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    star: {
        margin: 2, 
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    oldPrice: {
        fontSize: 12, 
        fontWeight: 'normal',
        textDecorationLine: 'line-through'
    }
});

export default styles