import styled from 'styled-components/native';

interface countertext{
    color: boolean;
}

export const Background = styled.TouchableOpacity`
    flex: 1;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    z-index: 2;
`

export const Container = styled.SafeAreaView`
    flex: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
    position: absolute;

`
export const Content = styled.View`
    background: ${props => props.theme.background};
    width: 80%;
    height: 40%;

    position: absolute;
    justify-content: space-between;
    z-index: 3;

    border-radius: 20px;
    padding: 10px;

`
export const CommentText =styled.Text`
    font-size: 20px;
`
export const CommentInputContainer= styled.View`
    margin-top: -20px;
    display: flex;
    background: ${props => props.theme.box};
    width: 100%;   
    height: 150px; 
    border-radius: 10px;

`
export const CommentInput= styled.TextInput`
    background: ${props =>props.theme.box};
    border-radius: 20px;
    font-size: 20px;
    padding: 10px;
    max-height: 130px; 
    width: 100%;
`
export const CommentButton = styled.TouchableOpacity`
    background: ${props => props.theme.primary};
    border-radius: 20px;
    width: 40%;
    height: 30px;
    
    position: absolute;
    right: 10px; 
    bottom: 10px;
    
    display: flex;
    justify-content: center;  
    align-items: center;
    color: white;

`
export const CountText = styled.Text<countertext>`
    font-size: 15px;
    color: ${props=> props.color ? "red" : "black"};
    position: absolute;
    bottom: 10px;
    left: 10px;
`
export const ErroText = styled.Text`
    font-size: 15px;
    margin-bottom: 50px;
`

export const PostText = styled.Text`
    color: white;
    font-size: 15px;
    font-family: 'Roboto_700Bold';

`