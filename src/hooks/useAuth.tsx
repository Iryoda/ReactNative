import React, {createContext, useContext, useCallback, useEffect} from 'react';

import Axios from 'axios';
import * as  Yup from 'yup'

import { AsyncStorage } from 'react-native';

import { User } from '../interfaces';
import api from '../services';

interface AuthState{
    user: string;
    token: string;
}

interface AuthContextData{
    tokenRequest(user: string, password: string): void;
    logout(): void;
    getUser(user: string): void;
    AuthRequest(user: string, password: string): void;
    userProps: User;
    erro: boolean;
    token: string;
    username: string;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {

    const [userId, setUserId] = React.useState<User>({} as User);
    const [erro, setErroState] = React.useState(false);
    const [userData, setUserData] = React.useState<AuthState>({} as AuthState);
 
    useEffect(() => {
        async function getData(){

            const token = await AsyncStorage.getItem('@Piupiuwer:token', (result) => {
                    return result;
            });
            const user =  await AsyncStorage.getItem('@Piupiuwer:user', (result) => {
                return result;
            });
            
            if( token && user ){
                setUserData({token, user});
            }
        }
        getData();
    }, []);
// tokenRequest (yup)  ------------------------------------------------------------
    const tokenRequest = useCallback(async( user, password) => {
        try {
            const esquema = Yup.object().shape({
            user: Yup.string().required('Usuário obrigatório'),
            password: Yup.string().required('Senha obrigatoria'),
            });

            await esquema.validate(authRequest(user, password), { abortEarly: false });
    
        } catch (err) {
           console.log(err);
        }
            
        }, []);
// AuthRequest -----------------------------------------------------------
    const authRequest = useCallback(async( user, password) => {
        await Axios({
            url: 'http://piupiuwer.polijr.com.br/login/',
            method: 'POST',
            data: {
                username: user,     //Define user e password com os parametros passados
                password: password,
            }}).then(res => {    //Parte de tratamento de erro da resposta            
                const { token } = res.data;
                AsyncStorage.setItem('@Piupiuwer:token', token);  
                AsyncStorage.setItem('@Piupiuwer:user', user );
                setUserData({...userData, token});
                getUser(user);
                setErroState(false);

            }).catch(error => {
                setErroState(true);
            }) 
        }, []);

// Logout --------------------------------------------------------
    const Logout = useCallback(async() => {
        await AsyncStorage.removeItem('@Piupiuwer:token');
        await AsyncStorage.removeItem('@Piupiuwer:user');
        const token = '';
        setUserData({...userData, token});
    }, []);

//User -------------------------------------------------------------
    const getUser = useCallback(async(user) =>{
        await api.get('/usuarios').then(res=> {
            res.data.filter((data: User) => {
                if(data.username.includes(user)){
                    setUserId(data);
                }})
        })}, []);

    
    return(
        <AuthContext.Provider
            value={{erro: erro,
                    username: userData.user,
                    token: userData.token,
                    userProps: userId,
                    logout: Logout,
                    AuthRequest: authRequest,
                    getUser,
                    tokenRequest }}
        > 
            {children}
        </AuthContext.Provider>
    )

}

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);
    return context;
}

