import 'react-native-gesture-handler';

import React from 'react';

import AppProvider from './src/hooks';
import AppStack from './src/routes/index';

import {AppLoading} from 'expo';
import { Roboto_400Regular, Roboto_700Bold, useFonts} from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';


const App: React.FC = () => {

    let [fontsLoaded] = useFonts({
      Roboto_400Regular,
      Roboto_700Bold,
    });
    if(!fontsLoaded){
      return <AppLoading/>
    } else {
    return (
      <AppProvider>
        <StatusBar style="auto"/>
        <AppStack/>
      </AppProvider>
    );
  }}
export default App;

