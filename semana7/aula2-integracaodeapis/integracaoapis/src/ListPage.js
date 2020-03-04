import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const baseURL = "https://us-central1-future4-users.cloudfunctions.net/api"

const MainDiv = styled.div`
`

const CustomList = styled.ul`
`

const CustomLI = styled.li`
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

  render(){
    return(
      <MainDiv>
          <h3>Usuarios Castrados:</h3>
          <CustomList>
            { this.state.userList.length === 0 && <p>Carregando...</p>}
            { this.state.userList.map((user) => (
                <CustomLI key={user.id}>{user.name}
                <DeleteButton onClick={() => this.deleteOldUser(user.id, user.name)}>X</DeleteButton>
                </CustomLI>
            )) }
          </CustomList>
      </MainDiv>
    )
  }

}

export default ListPage
