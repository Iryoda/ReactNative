import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Feed from '../pages/Feed';


const AuthRoutes = () =>{

    const {Navigator, Screen} = createStackNavigator();
    
    return(
        <Navigator screenOptions={{ headerShown: false}}>
            <Screen name= "Feed" component={Feed}/>
        </Navigator>
    )
}

export default AuthRoutes;