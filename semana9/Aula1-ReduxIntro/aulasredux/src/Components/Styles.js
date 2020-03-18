import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
    }
`

export const AppMainDiv = styled.div`
    color: white;
    text-align: center;
    height: 100vh;
    background-color: rgb(232,232,232);
`

export const TaskTitle = styled.h1`
    color: blue;
    font-size: 80px;
    font-weight: normal;
    margin: 0;
`

export const TaskListArea = styled.div`
    margin: auto;
    width: 50vw;
    border-radius: 10px;
    background-color: white;
    padding: 10px 20px 5px 10px;
`