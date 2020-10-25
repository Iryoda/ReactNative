import React from 'react';

import {Container, PerfilBox, UserImg, UserInfo, UserText, Interactions} from './styles';

const PiuTemplate = () => {
    return(
    <Container>
        <PerfilBox>
            <UserImg/>
            <UserInfo/>
        </PerfilBox>
        <UserText/>
        <Interactions/>
    </Container>
    )
}

export default PiuTemplate;
