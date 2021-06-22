import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import countryList from 'country-list';
import Button from '../../components/Button';
const AddressScreen = () => {
    
    const countries = countryList.getData();
    const [selectedCountry, setSelectedCountry ] = useState(countries[0].code);
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber ] = useState("")
    const [address1, setAddress1 ] = useState("")
    const [address2, setAddress2 ] = useState("")
    const [city, setCity ] = useState("")
    const [state, setState ] = useState("")
    const [zipCode, setZipCode ] = useState("")

    const [phoneError, setPhoneError] = useState()
    const onCheckOut = () => {
        // validate inputs here before submits
        // or validate each input when entered at the input 
        if(!fullName){
            Alert.alert('please fill your name')
        }
    }
    const validatePhoneNumber = () => {
       if(phoneNumber.length < 10) {
           setPhoneError("Invalid")
       }
    }
    return (
        <View style={styles.root}> 
            
            <View style={styles.row} >
                <Picker
                    selectedValue={selectedCountry}
                    onValueChange={setSelectedCountry}
                >
                
                    {
                        countries.map(country => <Picker.Item value={country.code} label={country.name} key={country.code}/>)
                    } 
                </Picker>
            </View>
            {/* fullName  */}
            <View style={styles.row}>
                <Text style={styles.label}>Full name (first and Last Name)</Text>
                <TextInput 
                    onChangeText={setFullName}
                    value={fullName}
                    style={styles.input}
                    placeholder="Full Name"
                    
                    />
            </View>
            {/* Phone number */}
            <View style={styles.row}>
                <Text style={styles.label}>Phone number</Text>
                <TextInput 
                    onChangeText={(phone) => {
                        setPhoneNumber(phone);
                        setPhoneError('');
                    }}
                    onEndEditing={validatePhoneNumber}
                    value={phoneNumber}
                    style={styles.input}
                    placeholder="Phone number"
                    keyboardType='phone-pad'
                    />
                { !!phoneError && <Text style={{color: 'red'}}>{phoneError}</Text>}
            </View>
            
            {/* Address Field */}
            <View style={styles.row}>
                <Text style={styles.label}>Address</Text>
                <TextInput 
                    onChangeText={setAddress1}
                    value={address1}
                    style={styles.input}
                    placeholder="Street address or P.O. Box"
                    
                    /> 
                <TextInput 
                    onChangeText={setAddress2}
                    value={address2}
                    style={styles.input}
                    placeholder="Apt, Suite, Unit, Building (optional) "
                    
                    />
            </View>
            {/* city */}
            <View style={styles.row}>
                <Text style={styles.label}>City</Text>
                <TextInput 
                    onChangeText={setCity}
                    value={city}
                    style={styles.input}
                    />
            </View>
            {/* State and ZiP Code  */}
            <View style={styles.rowState} >
                <View style={styles.col}>
                    <Text style={styles.label}>State</Text>
                    <TextInput 
                        onChangeText={setState}
                        value={state}
                        style={styles.input}
                        />
                </View>
                <View style={styles.col}>
                    <Text style={styles.label}>ZIP Code</Text>
                    <TextInput 
                        onChangeText={setZipCode}
                        value={zipCode}
                        style={styles.input}
                        keyboardType="number-pad"
                        />
                </View>
            </View>
            <Button text="Checkout" onPress={onCheckOut} />
        </View>
    )
}

export default AddressScreen;