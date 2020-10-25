import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';


const {Navigator, Screen} = createStackNavigator();

const AppRoutes = () =>{

    return (
            <Navigator screenOptions ={{ headerShown: false}}>
                <Screen name= "Login" component={Login}/>
            </Navigator>
    
    )
}
 export default AppRoutes; 