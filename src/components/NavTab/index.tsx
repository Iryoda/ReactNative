import React from 'react';

import {Background, NavTabContainer, 
        NavTabImg, NavTabText,
        CloseIcon, Space, NavTabBackground, 
        NavTabTextLogout, NavTabLogout} from './styles';

import logoIcon from '../../assets/img/logo.png';
import { useActions } from '../../hooks/useActions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAuth } from '../../hooks/useAuth';
import { Text } from 'react-native';

const NavTab = () => {

    const {logout} = useAuth();
    const {showNavTab, handleNavbar} = useActions();

    if( showNavTab){
    return (
        <>
        <Background onPress={() => handleNavbar()}/>
        <NavTabBackground>
            <NavTabContainer>
                <NavTabImg source={logoIcon}/>
            
                <NavTabText># Feed</NavTabText>
                <NavTabText># Perfil</NavTabText>
                <NavTabText># Churros</NavTabText>

                <NavTabLogout onPress={() => logout()}>
                    <NavTabTextLogout>- Logout</NavTabTextLogout>
                </NavTabLogout>
            </NavTabContainer>
        </NavTabBackground>
        </>
    );
    } else {
        return(
            <>
            </>
        )
    }
}

export default NavTab; 