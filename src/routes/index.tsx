import React, { useEffect } from 'react';

import { useAuth } from '../hooks/useAuth';
import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';

import { NavigationContainer } from '@react-navigation/native';

const AppStack = () =>{

    const {token } = useAuth();
    const [sigIn, setSignIn] = React.useState(false);

    useEffect(()=> {
        if(token == null) setSignIn(false);
        else setSignIn(true);
    }, [token])
     
    return(
        <NavigationContainer>
            {token ? <AuthRoutes/> : <AppRoutes/>}
        </NavigationContainer>
    )
        
}
 export default AppStack; 