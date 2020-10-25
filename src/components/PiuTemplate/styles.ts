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

export const UserImg = styled.View`
    background-color: ${ props => props.theme.backgroundDarker};
    width: 60px;
    min-height: 60px;
    border-radius: 100px;
`;

export const UserInfo = styled.View`
    background: ${ props => props.theme.backgroundDarker};
    border-radius: 20px;
    width: 80%;
    min-height: 64px;
`;

export const UserText = styled.View`
    background-color: ${ props => props.theme.backgroundDarker};  
    overflow: hidden;
    border-radius: 20px;
    margin-bottom: 10px;
    margin-top: 10px;
    height: 60px;
`;  

export const Interactions = styled.View`
    background-color: ${ props => props.theme.backgroundDarker};  
    border-radius: 20px;
  


`;