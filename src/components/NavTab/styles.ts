import styled from 'styled-components/native';

export const Background = styled.TouchableOpacity`
    flex: 1;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 2;
    
`;  
export const NavTabBackground=styled.SafeAreaView`
    position: absolute;
    flex: 1;
    width: 100%;
    height: 100%;

`
export const NavTabContainer = styled.View`
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    background: ${props => props.theme.box};
    height: 100%;
    width: 60%;
    padding: 50px 10px;
    z-index: 3;

`;

export const NavTabImg = styled.Image`
    height: 25px;
    margin-bottom: 30px;
  
`;

export const NavTabText = styled.Text`
    font-size: 20px;
    margin-top: 5px;
`; 
export const NavTabTextLogout = styled.Text`
    font-size: 20px;
`;

export const CloseIcon = styled.Text`
    font-size: 30px;

`

export const Space = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const NavTabLogout = styled.TouchableOpacity`
    position: absolute;
    bottom: 30px;
    left: 10px; 
`