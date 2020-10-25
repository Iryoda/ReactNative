import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { boolean } from 'yup';

interface ActionsContextData{
    word: string;
    wordDefiner(props: string): void;
    //Navtab
    handleNavbar(): void;
    showNavTab: boolean
    //Comment Modal
    handleCommentBox(): void,
    showCommentBox: boolean;
    //Confirm Modal
    handleModalConfirm(piuId: number): void;
    showModalConfirm: boolean;
    piuId: number;
}


const ActionsContext = createContext<ActionsContextData>( {} as ActionsContextData);

export const ActionsProvider: React.FC = ({children}) => {

    const [wordInput, setWordInput] = useState('');
    const [showNavTab, setNavTab] = useState(false);
    const [showComment, setShowComment] = useState(false);
    const [showModalConfirm, setModalConfirm] = useState(false);
    const [ piuId, setPiuId] = useState(0);

    const wordDefiner = useCallback(( props) => {
        setWordInput(props);
    }, []);
    
    const handleNavbar = () =>{
        setNavTab(!showNavTab);
    }

    const handleCommentBox = () => {
        setShowComment(!showComment);
    }

    const handleModalConfirm = (piuId: number) => {
        setModalConfirm(!showModalConfirm);
        setPiuId(piuId);
    }
    return(
        <ActionsContext.Provider value= {{ 
            word: wordInput, 
            wordDefiner,
            
            showNavTab: showNavTab,
            handleNavbar,

            handleCommentBox,
            showCommentBox: showComment,

            handleModalConfirm,
            showModalConfirm: showModalConfirm,
            piuId: piuId,
            }}
            >
            {children}
        </ActionsContext.Provider>
    )
}

export function useActions(): ActionsContextData{
    const context = useContext(ActionsContext);
    return context;
}