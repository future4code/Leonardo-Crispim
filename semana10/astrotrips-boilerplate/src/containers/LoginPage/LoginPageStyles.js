import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
    }
`

export const CustomHeader = styled.div`
    padding: 5px 15px 5px 10px;
    background-color: rgb(240,240,240);
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

export const MainDiv = styled.div`
`

export const LoginWrapper = styled.form`
width: 100%;
height: 80vh;
gap: 10px;
place-content: center;
justify-items: center;
display: grid;
`;