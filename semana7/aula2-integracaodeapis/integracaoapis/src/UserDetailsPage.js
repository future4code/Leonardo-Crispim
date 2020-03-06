import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const baseURL = "https://us-central1-future4-users.cloudfunctions.net/api"

const MainDiv = styled.div`
`

class UserDetailsPage extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      currentUserName: '',
      currentUserEmail: '',
      isEditing: false,
      newUserName: '',
      newUserEmail: '',
    }
  }

  componentDidMount = () =>{
    this.getUser()
  }

  getUser = () => {
    const getUserPromise = axios.get(`${baseURL}/users/getUser/${this.props.userID}`, {
        headers: {
            'api-token': 'string',
        }
    })

    getUserPromise.then(response => {
        this.setState({
            currentUserEmail: response.data.result.email,
            currentUserName: response.data.result.name,
        })
        console.log(this.state.currentUserEmail, this.state.currentUserName, response.data.result)
    }).catch(error => {
        console.log(error);
    })
  }

  editingToggle = () =>{
    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  handleNewUserInput = (event) =>{
    const userInput = event.target.value

    this.setState({
      newUserName: userInput
    })
  }

  handleNewEmailInput = (event) =>{
    const emailInput = event.target.value

    this.setState({
      newUserEmail: emailInput
    })
  }

  saveNewInfo = () =>{

    const dataNewUser = {
      user: {
        id: this.props.userID,
        name: this.state.newUserName ? this.state.newUserName : this.state.currentUserName,
        email: this.state.newUserEmail ? this.state.newUserEmail : this.state.currentUserEmail,
      }
    }

    const editUserPromise = axios.put(`${baseURL}/users/editUser`, dataNewUser, {
      headers: {
        'api-token': 'string'
      }
    })

    editUserPromise.then(response => {
      alert('Usuario editado com sucesso!')

      this.setState({
        newUserName: '',
        newUserEmail: '',
        isEditing: false,
      })

      this.getUser()

    }).catch(error => {
      alert("Erro na edicao do usuario.")
      console.log(error)
    })
  }


  render(){
    return(
      <MainDiv>
          <h1>Usuario: {this.state.currentUserName}</h1>
          <h2>Email: {this.state.currentUserEmail}</h2>
          <h3>ID: {this.props.userID}</h3>

          { this.state.isEditing === false &&
            <button onClick={this.editingToggle}>Editar Dados</button>
          }

          { this.state.isEditing === true &&
            <div>
              <span>Novo Usuario: </span> 
              <input value={this.state.newUserName} onChange={this.handleNewUserInput}></input> <br />
              <span>Novo Email: </span>   
              <input value={this.state.newUserEmail} onChange={this.handleNewEmailInput}></input> <br />
              <button onClick={this.saveNewInfo}>Salvar Novas Informacoes</button>
            </div>
          }
      </MainDiv>
    )
  }

}

export default UserDetailsPage;
