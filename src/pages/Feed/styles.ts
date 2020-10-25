import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient'; 

export const Father = styled.SafeAreaView`
    flex: 1;
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    background: ${props=> props.theme.background};
    
    font-family: 'Roboto_400Regular';
`;

export const Container = styled.View`
    margin-top: 10px;
    padding: 0px 10px;

`
export const Header = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 30px;
    height: 80px;
    width: 100%;
`
export const CommentButton = styled.TouchableOpacity`
    background: ${props=> props.theme.primary};
    border-radius: 100px;
    width: 50px;
    height: 50px;

    position: absolute;
    right: 15px;
    bottom: 60px;

    display: flex;
    justify-content:center;
    align-items: center;
    z-index: 1;
`

export const CommentText = styled.Text`
    font-size: 40px;
    color: white;
    display: flex;
    justify-content: center;
`