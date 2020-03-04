import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const baseURL = "https://us-central1-future4-users.cloudfunctions.net/api"

const MainDiv = styled.div`
`

const BoxDiv = styled.div`
border: solid black 1px;
height: 200px;
width: 360px;
margin: auto;
margin-top: 100px;
`

const SaveButton = styled.button`
height: 25%;
width: 40%;
background-color: darkblue;
color: white;
margin-left: 30%;
margin-top: 7%;
`

const AlignedText = styled.p`
margin-left: 20%;
margin-top: 5%;
`

class Cadastro extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
        userName: "",
        userEmail: "",
    }
  }

  handleUserNameInput = (event) => {
    const userNameInput = event.target.value

    this.setState({
      userName: userNameInput
    })
  }

  handleUserEmailInput = (event) => {
    const userEmailInput = event.target.value

    this.setState({
      userEmail: userEmailInput
    })
  }

  saveNewUser = () =>{
      const dataNewUser = {
          name: this.state.userName
      }

      const newUserPromise = axios.post(`${baseURL}/users/createUser`, dataNewUser, {
          headers: {
              'api-token': 'string'
          },
          body: {
              'name': 'string',
              'email': 'string'
          }
      })

      newUserPromise.then(response =>{
          alert("Usuario cadastrado com sucesso!")
      })
  }

  render(){
    return(
      <MainDiv>
        <BoxDiv>
          <AlignedText>Nome: <input onChange={this.handleUserNameInput}></input></AlignedText>
          <AlignedText>E-Mail: <input onChange={this.handleUserEmailInput}></input></AlignedText>
          <SaveButton onClick={this.saveNewUser}>Salvar</SaveButton>
        </BoxDiv>

      </MainDiv>
    )
  }

}

export default Cadastro;
