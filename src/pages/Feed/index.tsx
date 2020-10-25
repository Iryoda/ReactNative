import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Image, Text } from 'react-native';

import PiuTemplate from '../../components/PiuTemplate';
import SearchBar from '../../components/SearchBar';
import Pius from '../../components/Pius';
import NavTab from '../../components/NavTab';
import CommentModal from '../../components/CommentsModal';

import { Father, Container, Header, CommentButton, CommentText} from './styles';


import api from '../../services';

import { Piu } from '../../interfaces';
import { useAuth } from '../../hooks/useAuth';
import { useActions } from '../../hooks/useActions';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import hambIcon from '../../assets/img/hamburguer.png';
import ConfirmModal from '../../components/ConfirmModal';

const Feed = () => {
    
    let piusContent;

    const { userProps, getUser, username} = useAuth();
    const { word, handleNavbar, handleCommentBox} = useActions()

    const [isLoadingPius, setIsLoadingPius] = useState(true);
    const [pius, setPius] = useState<Piu[]>([]);

    //Varredura de Pius Fav
    const favPiusIds = useMemo(() => {
        const favPius = pius.filter( piu => {
          const piuQueFav = piu.favoritado_por.map(item => item.id)
            return piuQueFav.includes(userProps.id);
        })
        return favPius.map(piu => piu.id);
      }, [pius, userProps]);
  
    //Varredura de Pius liked
      const likedPiusIds = useMemo( ()=> {
          //Retorna array com o id dos pius que o usuario deu like
          const likedPius = pius.filter(piu => { 
            const usuariosQueDeramLike = piu.likers.map(item => item.id)
            return usuariosQueDeramLike.includes(userProps.id); 
          })
          return likedPius.map(piu => piu.id);
      }, [pius, userProps]);

    useEffect(()=>{
        getUser(username);
    }, []);

    useEffect(()=>{
        async function locatePost(){
          await api.get('/pius').then(res => {
          setPius(res.data);
          setIsLoadingPius(false);
          })}
          locatePost();
        }, [pius]);

    if(!isLoadingPius){
        piusContent =
        pius.map((item: Piu) => {
            if(word == null){ 
                return(
                <Pius 
                    key={item.id}
                    piu={item}
                    user={item.usuario}
                    isLiked={likedPiusIds.includes(item.id)}
                    isFaved={favPiusIds.includes(item.id)}
                />)
            } else if(  item.usuario.first_name.toLowerCase().includes(word.toLowerCase()) 
                        ||item.usuario.last_name.toLowerCase().includes(word.toLowerCase())
                        ||item.usuario.username.toLowerCase().includes(word.toLowerCase()))
                    {
                        return(
                            <Pius 
                                key={item.id}
                                piu={item}
                                user={item.usuario}
                                isLiked={likedPiusIds.includes(item.id)}
                                isFaved={favPiusIds.includes(item.id)}
                            />
                        )
                    }
            });
    } else {
        piusContent = 
            <>
            <PiuTemplate/>
            <PiuTemplate/>
            <PiuTemplate/>
            <PiuTemplate/>
            </>
    }

    return(
        <>
        <CommentModal/>
        <NavTab/>
        <ConfirmModal/>
        <CommentButton
            onPress = {() => handleCommentBox()}>
            <CommentText>+</CommentText>
        </CommentButton>
        <Father>
            <Container>
                <Header>
                    <SearchBar/>
                    <TouchableOpacity
                        onPress={()=> handleNavbar()}
                        >
                        <Image source={hambIcon}/>
                    </TouchableOpacity>
                </Header>
                <ScrollView
                    scrollEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    >
                    {piusContent}
                </ScrollView>
            </Container>
        </Father>
        </>
    )
};

export default Feed;