import styled from 'styled-components/native';

interface ModalProps{
    color: boolean
}

export const Background = styled.SafeAreaView`
    flex: 1;
    position: absolute;

    width: 100%;
    height: 100%;
    
    background: rgba(0, 0, 0, 0.5);
    
    justify-content: center;
    align-items: center;
    
    z-index: 2;
`

export const Container = styled.View`
    background: ${props=> props.theme.box};
    border-radius: 20px;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: 20%;
    padding: 5px 10px;
`
export const ButtonContainer = styled.View`
    display: flex;
    width: 100%;
    height: 60px;
    flex-direction: row;
    justify-content: space-around;
    border-radius: 10px;

`
export const ModalText = styled.Text`
    font-size: 20px;

`
export const ModalInput = styled.TouchableOpacity<ModalProps>`
    background: ${ props => props.color ? props.theme.primary : props.theme.background};
    border-radius: 10px;
    width: 45%;

height: 50px;
    justify-content: center;
    align-items: center;
`