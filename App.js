import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, useColorScheme} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomeScreen from './src/screens/homeScreen/index';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    alignItems: 'center',
    justifyContent: 'center',
  }
  
  return (
    <SafeAreaView style={backgroundStyle}>
      
      
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <HomeScreen />
      
    </SafeAreaView>
  );
}


