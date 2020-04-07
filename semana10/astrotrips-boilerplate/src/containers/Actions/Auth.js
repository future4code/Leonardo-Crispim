import axios from 'axios';
import { push } from "connected-react-router";

const MainURL = 'https://us-central1-missao-newton.cloudfunctions.net/futureX/leocrispim'


export const login = (email, password) => async (dispatch) =>{
    const loginData ={
        email,
        password
    }

    try{
        const response = await axios.post(`${MainURL}/login`, loginData);

        const token = response.data.token;

        window.localStorage.setItem("token", token)

        dispatch(push('/trips'))
    }
    catch(error){
        console.error(error)
        alert("Erro ao tentar fazer o login")
    }

}