import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

import LoginBox from '../../components/LoginBox';
import { Father } from './styles';

const Login = () => {
    return(
        <Father>
            <LoginBox/>
        </Father>
  
    )
}

export default Login;