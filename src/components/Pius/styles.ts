import styled from 'styled-components/native';


export const Container = styled.View`
    background: ${props => props.theme.box};
    padding: 10px;
    overflow: hidden;
    min-width: 100%;
    margin-bottom: 10px; 
    border-radius: 20px;
`;

export const PerfilBox = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`;

export const UserImg = styled.Image`
    background-color: ${ props => props.theme.backgroundDarker};
    width: 60px;
    min-height: 60px;
    border-radius: 100px;
`;

export const UserInfo = styled.View`
    background: ${ props => props.theme.background};
    border-radius: 20px;
    width: 80%;
    min-height: 64px;
    padding: 5px 10px;

    justify-content: space-between;
`;

export const UserText = styled.View`
    background-color: ${ props => props.theme.box};  
    overflow: hidden;
    border-radius: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
    min-height: 32px;
    padding: 5px 10px;
`;  

export const Interactions = styled.View`
    background-color: ${ props => props.theme.box};  
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 32px;
    padding: 5px 10px;

`;

export const IconContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 15%;
`
export const IconInfo = styled.Text`
    font-size: 20px;
`

export const IconImage = styled.Image`
    height: 28px;
    resizeMode: contain;

`
export const UserTextData = styled.Text`
    font-size: 20px;
`

export const NameText = styled.Text`
    font-size: 20px;
`

export const UsernameText = styled.Text`
    color: ${props => props.theme.primary};
    font-size: 15px;
`
export const DescriptionText = styled.Text`
    font-size: 10px;
`
