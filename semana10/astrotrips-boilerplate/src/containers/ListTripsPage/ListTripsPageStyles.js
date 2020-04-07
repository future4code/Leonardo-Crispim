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
    margin-bottom: 20px;
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

export const MainGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`

export const GridImage = styled.img`
    height: 260px;
    width: 320px;
`

export const GridSlot1 = styled.div`
    display: flex;
    width: 80%;
    justify-content: flex-end;
    margin-bottom: 75px;
`

export const GridSlot2 = styled.div`
    width: 85%;
`

export const TripName = styled.h3`
    display: inline;
    margin-right: 10%;
    font-size: 30px;
`

export const TripDate = styled.h3`
    font-size: 27px;
    display: inline;
    text-decoration: underline;
`

export const TripDetails = styled.p`
    font-size: 20px;
`

export const TripDescription = styled.p`
    margin-top: 10px;
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