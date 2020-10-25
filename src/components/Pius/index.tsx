import React from 'react';
import { Piu, User } from '../../interfaces';

import { Container, PerfilBox, UserImg, 
         UserInfo, UserText, Interactions, IconImage,
         NameText, UsernameText, DescriptionText,
         IconContainer, IconInfo, UserTextData} from './styles';

import favIcon from '../../assets/img/star.png';
import favIconPainted from '../../assets/img/star_painted.png';
import commentIcon from '../../assets/img/comment.png';
import repiuIcon from '../../assets/img/repiu.png';
import heartIcon from '../../assets/img/heart.png';
import heartIconPainted from '../../assets/img/heart_activated.png';
import trashIcon from '../../assets/img/trash.png';

import { useAuth } from '../../hooks/useAuth';
import { usePost } from '../../hooks/usePost';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDelete } from '../../hooks/useDelete';
import { useActions } from '../../hooks/useActions';

interface PiusProps{
    piu: Piu;
    user: User;
    isLiked: boolean;
    isFaved: boolean;
}

const Pius: React.FC<PiusProps> = ({piu, user, isLiked, isFaved}) => {
    
    let owner;
    const { handleModalConfirm } = useActions();
    const { postLike} = usePost();
    const { deleteComment} = useDelete();
    const { userProps, token} = useAuth();

    function handleLike(){  
        postLike("dar-like", userProps.id, piu.id, token);
    }

    if(user.id === userProps.id){
        owner = 
        <TouchableOpacity
            onPress={() => handleModalConfirm(piu.id)}>
            <IconImage source={trashIcon}/>
        </TouchableOpacity>
    } else {
        owner = 
        <TouchableOpacity
            onPress={() => {postLike("favoritar", userProps.id, piu.id, token)}}
            >
            <IconImage source={isFaved ? favIconPainted : favIcon}/>
        </TouchableOpacity>
    }
    
    return(
    <Container>
        <PerfilBox>
            <UserImg source={{ uri: user.foto}}/>
            <UserInfo>
                <NameText>{user.first_name} {user.last_name}</NameText>
                <UsernameText>@{user.username}</UsernameText>
                <DescriptionText>"{user.sobre}"</DescriptionText>
            </UserInfo>
        </PerfilBox>

        <UserText>
            <UserTextData>{piu.texto}</UserTextData>
        </UserText>
        <Interactions>
            <IconContainer
                onPress={()=> handleLike()}
                >
                <IconImage source={isLiked ? heartIconPainted : heartIcon}/>
                <IconInfo>{piu.likers.length}</IconInfo>
            </IconContainer>
            <IconImage source={ commentIcon}/>
            <IconImage source={repiuIcon}/>
            {owner}
        </Interactions>
    </Container>

    )
}

export default Pius;