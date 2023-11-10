import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './android/app/Navigate/AppNavigator';
import AudioProvider from './android/app/context/AudioProvider';

export default function App() {
  return(
  <AudioProvider>
    <NavigationContainer>
    <AppNavigator/>
  </NavigationContainer>
  </AudioProvider>
  )
}


