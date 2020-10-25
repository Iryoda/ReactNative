import styled from 'styled-components/native';

interface Input{
    password: boolean;

}

export const Container = styled.View`
    justify-content: space-between;
    align-items: center;
    background: ${props=> props.theme.box};
    border-radius: 20px;
    width: 100%;
    height: 45%;
    padding: 20px;
` 
export const MyButton = styled.TouchableOpacity`
    background: ${props=> props.theme.primary};
    font-size: 20px;
    justify-content: center;
    align-items: center;

    padding: 10px 20px;
    border-radius: 20px;  

    height: 70px;
    width: 100%;     

`;
export const InputBox = styled.View`
    background: ${props=> props.theme.background};

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 10px 20px;
    width: 100%;
    height: 70px;

    border-radius: 20px;

`
export const UserInput = styled.TextInput<Input>`
    background: ${props=> props.theme.background};
    border-radius: 20px;

    width: ${props=> props.password ? '80%' : '100%'};
    height: ${props=> props.password ? '70px' : '70px'};

    padding: ${props=> props.password ? '0px' : '10px 20px'};
    font-size: 20px;
`
export const MyButtonText = styled.Text`
    color: white;
    font-size: 20px;
`