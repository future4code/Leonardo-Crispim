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

  render(){
    return(
      <MainDiv>
          <h3>Usuarios Castrados:</h3>
          <CustomList>
            { this.state.userList.length === 0 && <p>Carregando...</p>}
            { this.state.userList.map((user) => (
                <CustomLI key={user.id}>{user.name}</CustomLI>
            )) }
          </CustomList>
      </MainDiv>
    )
  }

}

export default ListPage;
