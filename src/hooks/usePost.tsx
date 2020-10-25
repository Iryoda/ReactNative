import React, { createContext, useCallback, useContext, useState} from 'react';

import Axios from 'axios';

interface PostContextData{
    postLike( location: string, useId: number, piuId: number, token:string): void;
    postComment(userId: number, text: string, token: string): void;
    erroLike: boolean;
    erroComment: boolean;
}

const PostContext = createContext<PostContextData>({} as PostContextData);

export const PostProvider: React.FC = ({children}) => {

    const [erroLike, setErroLike] = useState(false);
    const [erroComment, setErroComment] = useState(false);

//darLike Function =================================

    const postLike = useCallback( async( location, userId, piuId, token) => {
        await Axios({
            url: `http://piupiuwer.polijr.com.br/pius/${location}/`,
            method: 'POST',
            headers: {
                Authorization: `JWT ${token}`
            },
            data: {
                usuario: userId,
                piu: piuId,
            }
            }).then(() =>{
                setErroLike(false);
            }).catch(() =>{
                setErroLike(true);
        })
    }, []);
// PostComment ----------------------------------------------------------
    const postComment = useCallback(async(userId, text, token)=> {
        await Axios({
            url: `http://piupiuwer.polijr.com.br/pius/`,
            method: 'POST',
            headers: {
                Authorization: `JWT ${token}`
            },
            data: {
                usuario: userId,
                texto: text,
            }
            }).then(() =>{
                setErroComment(false);
            }).catch(() =>{
                setErroComment(true);
            })
    }, []);

// Return      ----------------------------------------------------------
return (
    <PostContext.Provider value = {{ 
        postLike: postLike,
        postComment: postComment, 
        erroLike: erroLike,
        erroComment: erroComment,
        }}
        >
        {children}
    </PostContext.Provider>
)}


export function usePost(): PostContextData{
    const context = useContext(PostContext);
    return context;

}