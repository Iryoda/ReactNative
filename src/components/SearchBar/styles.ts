import styled from 'styled-components/native'

export const Container = styled.View`
    background: ${props => props.theme.box};
    border-radius: 20px;
    width: 85%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;

    padding: 5px 20px;
`

export const Image = styled.Image`
    width: 30px;
    height: 30px;
    opacity: 0.5;
`
export const TextInput = styled.TextInput`
    color: black;
    width: 85%;
    max-height: 32px;
    font-size: 20px;
`
