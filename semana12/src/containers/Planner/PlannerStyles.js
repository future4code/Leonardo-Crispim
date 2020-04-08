import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
    }
`

export const MainDiv = styled.div`
`

export const InputForm = styled.form`
    display: grid;
    grid-auto-columns: 1fr;
    grid-row-gap: 10px;
    width: 20%;
    padding: 20px;
    text-align: center;
    margin: auto;
`

export const WeekGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 15px;
    padding: 15px;
`

export const WeekDay = styled.div`
    text-align: center;
    border-radius: 30px;
    border: solid black 1px;
`

export const WeekTaskList = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    border-radius: 3px;
    border: solid black 1px;
    padding: 5px;
    text-align: center;
`

export const Task = styled.span`
    margin: 0;
    padding: 0;
`