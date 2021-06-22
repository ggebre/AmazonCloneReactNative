import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
        padding: 10,
        width: '100%'
    },
    row: {
        marginVertical: 5
    },
    rowState: {
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    col: {
        flex: 1
    },
    label: {
        
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: 'white',
        padding: 5,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 2, 
        height: 40,
    }
});

export default styles;