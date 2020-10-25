import React, { useState } from 'react'

import { Image, Text } from 'react-native';

import { Container, MyButton, UserInput, InputBox, MyButtonText} from './styles';

import LogoIcon from '../../assets/img/logo.png';
import eyeIconOpen from '../../assets/img/eyeOpen.png';
import eyeIconClose from '../../assets/img/eyeClose.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/useAuth';

const LoginBox = () => {
    
    let erroMsg;

    const { AuthRequest, erro } = useAuth();
    
    const [ username, setUsername] = React.useState('');
    const [ password, setPassword] = React.useState('');
    const [hidden, setHidden] = React.useState(true);

    if(erro){
        erroMsg = "Cheque suas credencias!"
    } else {
        erroMsg = "";
    }
    
    return(
        <Container>
            <Image source={LogoIcon}/>
            <UserInput
                password= {false} 
                placeholder="Username"
                value = {username}
                onChangeText = {(e)=> setUsername(e)}
                />
            <InputBox>
                <UserInput 
                    password= {true} 
                    placeholder="Password"
                    secureTextEntry={hidden}
                    value = {password}
                    onChangeText = {(e)=> setPassword(e)}
                    />

                <TouchableOpacity
                    onPress={()=> setHidden(!hidden)}
                    >
                    <Image 
                        source={ hidden ? eyeIconClose : eyeIconOpen }
                        />
                </TouchableOpacity>
            </InputBox>
            <Text>{erroMsg}</Text>
            <MyButton
                onPress={()=> AuthRequest(username, password)}
                >
                <MyButtonText>Login</MyButtonText> 
            </MyButton>
        </Container>
    )
}

export default LoginBox;