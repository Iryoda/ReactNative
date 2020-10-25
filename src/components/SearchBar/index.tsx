import React, { useEffect } from 'react';

import {Container, Image, TextInput} from './styles';

import searchIcon from '../../assets/img/search.png';
import { useActions } from '../../hooks/useActions';

const SearchBar = () => {

    const [userInput, setUserInput] = React.useState('');
    const { wordDefiner} = useActions();
    
    useEffect(()=>{
        wordDefiner(userInput);
    })
    
    return (
        <Container>
            <Image source={searchIcon}></Image>
            <TextInput
                value = {userInput}
                onChangeText = {(e) => setUserInput(e)}
                />    
        </Container>

    )
}

export default SearchBar;