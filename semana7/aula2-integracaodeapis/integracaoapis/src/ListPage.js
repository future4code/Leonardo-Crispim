import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const baseURL = "https://us-central1-future4-users.cloudfunctions.net/api"

const MainDiv = styled.div`
`

const SearchInput = styled.input`
position: fixed;
width: 20%;
margin-top: -24px;
margin-left: 40%;
`

const SearchButton = styled.button`
margin-left: 45%;
width: 10%;
margin-bottom: 2%;
`

const CustomList = styled.ul`
text-align: center;
list-style-position: inside;
`

const CustomH3 = styled.h3`
text-align: center;
`

const CustomLI = styled.li`
display: inline;
`

const DeleteButton = styled.button`
color: red;
margin-left: 5px;
`

class ListPage extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
        userList: [],
        searchUserInput: '',
    }
  }

  componentDidMount(){
    this.showAllUsers()
  }

  showAllUsers = () => {
    const allUsersPromise = axios.get(`${baseURL}/users/getAllUsers`, {
        headers: {
            'api-token': 'string',
        }
    })

    allUsersPromise.then(response => {
        this.setState({
            userList: response.data.result
        })
    }).catch(error => {
        console.log(error);
    })
  }

  deleteOldUser = (olduserid, oldusername) =>{
    const deleteConfirmation = window.confirm("Deseja mesmo deletar o usuario: " + oldusername + '?');

    if (deleteConfirmation === true){
      const request = axios.delete(`${baseURL}/users/deleteUser?id=${olduserid}`,{
        headers: {
          'api-token' : 'string',
        }
      })
  
      request.then((response) => {
        this.showAllUsers()
        alert("Usuario deletado com sucesso!");
  
      }).catch((error) => {
        alert("Ocorreu um erro ao tentar deletar esse usuario.");
      })
    }
  

    else(console.log("Operacao cancelada com sucesso. (DELETE USER)"));
   
  }

  transferUserID = (usuarioID) =>{
    const userID = usuarioID

    this.props.getUserID(userID)

  }

  handleSearchInputValue = (event) =>{

    const newUserInput = event.target.value

    this.setState({
      searchUserInput: newUserInput
    })
  }

  searchUser = () =>{
    const userInput = this.state.searchUserInput

    const searchUserPromise = axios.get(`${baseURL}/users/searchUsers?name=${userInput}`, {
      headers: {
        'api-token' : 'string',
      }
    })

    searchUserPromise.then(response => {
      if(response.data.result.length > 0){
        this.setState({
          userList: response.data.result
        })
      }
      else{
        alert("Usuario nao encontrado!")
      }
    }).catch(error => {
      console.log(error)
    })

  }

  render(){
    return(
      <MainDiv>
          <SearchInput onChange={this.handleSearchInputValue}></SearchInput>
          <SearchButton onClick={this.searchUser}>Buscar Usuario</SearchButton>

          <CustomH3>Usuarios Castrados:</CustomH3>

          <CustomList>
            { this.state.userList.length === 0 && <p>Carregando...</p>}
            { this.state.userList.map((user) => (
              <div>
                <CustomLI onClick={() => this.transferUserID(user.id)} key={user.id}>
                  {user.name}
                </CustomLI>
                <DeleteButton onClick={() => this.deleteOldUser(user.id, user.name)}>X</DeleteButton>
              </div>
            )) }
          </CustomList>

      </MainDiv>
    )
  }

}

export default ListPage
