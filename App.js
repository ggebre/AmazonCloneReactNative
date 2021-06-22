import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, useColorScheme} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    // alignItems: 'center',
    // justifyContent: 'center',
    
  }
  
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      
      <Router />
    </SafeAreaView>
  );
}


