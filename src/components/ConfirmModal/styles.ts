import styled from 'styled-components/native';

interface ModalProps{
    color: boolean
}

export const Background = styled.SafeAreaView`
    flex: 1;
    display: flex;
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
    width: 70%;
    height: 40%;
    justify-content: center;
    align-items: center;
    z-index: 3;

`
export const ButtonContainer = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: space-around;

`

export const ModalText = styled.Text`
    font-size: 20px;

`

export const ModalInput = styled.TouchableOpacity<ModalProps>`
    background: ${ props => props.color ? props.theme.primary : props.theme.background};
    
    width: 40%;
    height: 30px;
    justify-content: center;
    align-items: center;
`