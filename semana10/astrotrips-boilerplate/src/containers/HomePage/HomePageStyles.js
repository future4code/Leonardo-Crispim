import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
    }
`

export const CustomHeader = styled.div`
    padding: 5px 15px 5px 10px;
    background-color: rgb(230,230,230);
    display: flex;
    justify-content: space-between;
`

export const SmallLogo = styled.img`
    height: 35px;
    width: 40px;
    cursor: pointer;
`

export const MidLogo = styled.img`
    height: 35px;
    width: 180px;
`

export const LoginButton = styled.button`
    border-radius: 30px;
    border: solid black 1px;
    width: 70px;
`

export const MainDiv = styled.div`
    background-color: rgb(240,240,240);
    text-align: center;
`

export const MainTitle = styled.h1`
    text-align: center;
    font-style: bold;
    text-decoration: underline;
    margin-bottom: 50px;
`

export const MainGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-bottom: 70px;
`

export const GridSlot = styled.div`
    text-align: center;
    background-color: rgb(240,240,240);
    border-right: solid grey 0.2px;
    border-left: solid grey 0.2px;
`

export const GridImage = styled.img`
    height: 260px;
    width: 320px;
`

export const FinalDiv = styled.div`
    padding: 20px;
    background-color: rgb(230,230,230);
`