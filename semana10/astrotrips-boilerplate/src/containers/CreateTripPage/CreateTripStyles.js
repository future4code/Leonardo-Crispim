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

export const MainDiv = styled.div`
    background-color: rgb(240,240,240);
    text-align: center;
`

export const MainTitle = styled.h2`
    margin-bottom: 50px;
`

export const Footer = styled.div`
    padding: 20px;
    background-color: rgb(230,230,230);
`

export const FooterLogo = styled.img`
    margin: 10px;
    height: 35px;
    width: 40px;
`

export const ApplicationFormContainer = styled.form`
  place-content: center;
  justify-items: center;
  display: flex;
  flex-direction: column;
  width: 70vw;
  margin: 1rem auto;
  `