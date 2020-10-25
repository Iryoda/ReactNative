import React, { createContext, useCallback, useContext, useState } from 'react';
import Axios from 'axios';

//Interface------------------------------------------
interface DeleteContextData{
    deleteComment( piuId: number, token: string): void;
    erroOnDelete: boolean;

}

//Context  ------------------------------------------------------
 const DeleteContext = createContext<DeleteContextData>({} as DeleteContextData);

 export const DeleteProvider: React.FC = ({children}) => {

    const [erroOnDelete, setErroOnDelete] = useState(false);
//DeleteComment Function ------------------------------------------

    const deleteComment = useCallback(async(piuId, token)=> {
        await Axios({
            url: `http://piupiuwer.polijr.com.br/pius/${piuId}`,
            method: 'DELETE',
            headers: {
                Authorization: `JWT ${token}`
            }
            }).then(() =>{
                setErroOnDelete(false);
            }).catch(() =>{
                setErroOnDelete(true);
            })
    }, []);

//return do Provider ------------------------------------------
      return(
          <DeleteContext.Provider value = {{deleteComment:  deleteComment, erroOnDelete: erroOnDelete}}>
              {children}
          </DeleteContext.Provider>
      )
}

export function useDelete(): DeleteContextData{
    const context = useContext(DeleteContext);
    return context;
}