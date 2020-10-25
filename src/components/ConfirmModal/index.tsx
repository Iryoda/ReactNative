import React from 'react';
import { Text } from 'react-native';
import { useActions } from '../../hooks/useActions';
import { useAuth } from '../../hooks/useAuth';
import { useDelete } from '../../hooks/useDelete';

import { Background, ButtonContainer, ModalInput, ModalText, Container } from './styles';

const ConfirmModal =  () => {

    const { deleteComment } = useDelete(); 
    const{ showModalConfirm ,handleModalConfirm, piuId } = useActions();
    const { token } = useAuth();


    if(showModalConfirm)
    {
        return (
        <Background>
            <Container>
                <ModalText>Quer mesmo excluir este Piu?</ModalText>
                <ButtonContainer>
                    <ModalInput 
                        color={false}
                        onPress={()=> handleModalConfirm(piuId)}
                        >
                        <Text>Não</Text>
                    </ModalInput>

                    <ModalInput 
                        color={true}
                        onPress={() => {deleteComment(piuId, token); handleModalConfirm(piuId)}}
                        >
                        <Text>Sim</Text>
                    </ModalInput>
                </ButtonContainer>
            </Container>
        </Background>
    ) } else {
        return(
            <>
            </>
        )
    }
}

export default ConfirmModal;