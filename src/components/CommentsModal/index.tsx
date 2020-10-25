import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

import { useActions } from '../../hooks/useActions';
import { useAuth } from '../../hooks/useAuth';
import { usePost } from '../../hooks/usePost';

import {Background, Content, CommentText, CommentInput, CommentButton, 
        Container, CommentInputContainer, CountText, ErroText, PostText } from './styles';

const CommentModal = () =>{

    const { postComment } = usePost();
    const {userProps, token} = useAuth();
    const {showCommentBox, handleCommentBox} = useActions();
    
    const [erroMsg, setErroMsg] = useState('');
    const [comment, setComment] = React.useState('');
    const [counter, setCounter] = React.useState(0);
    const [overLimit, setOverLimit] = React.useState(false);

    const handlePost = () =>{
        if( comment.length > 140){
            setErroMsg("Seu post deve ter maximo 140 caracteres.");
            console.log("erro");
        } else if ( comment.length < 1){
            setErroMsg("Você não pode enviar um post vazio.");
            console.log("erro");
        } else {
            postComment(userProps.id, comment, token);
            handleCommentBox();
        }
    }
    
    useEffect(()=>{
        setCounter(comment.length);

        if(comment.length > 140){
            setOverLimit(true);
        } else {
            setOverLimit(false);
        };
    }, [comment])
    
    if(showCommentBox){
        return(
        <>
        <Background onPress={()=> handleCommentBox()}/>
        <Container>
            <Content>
                <CommentText>Digite seu post</CommentText>
                    <CommentInputContainer>
                        <CommentInput 
                            placeholder="Digite seu comentário"
                            multiline={true}
                            numberOfLines={4}
                            underlineColorAndroid="transparent"
                            value={comment}
                            onChangeText={(e) => setComment(e)}
                            >
                                
                            </CommentInput>
                    <CountText color={overLimit}>{counter}/140</CountText>
                    </CommentInputContainer>
                    <ErroText>{erroMsg}</ErroText>
                  
                    <CommentButton
                        onPress= {() => handlePost()}
                        >
                        <PostText>Postar {">"}</PostText>
                    </CommentButton>
            </Content>
        </Container>
        </>
        )} else {
            return(
                <>
                </>
            )
        }
}
export default CommentModal;