import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Cadastro from './Cadastro';
import ListPage from './ListPage';
import UserDetailsPage from './UserDetailsPage';

const MainDiv = styled.div`
`

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      showPage: 'cadastro',
      changePageText: 'Lista de Usuarios',
      currentUserID: ''
    }
  }

  changePage = () =>{

    if(this.state.showPage === 'cadastro'){
      this.setState({
        showPage: 'listpage',
        changePageText: 'Pagina de Cadastro'
      })
    }

    if(this.state.showPage === 'listpage'){
      this.setState({
        showPage: 'cadastro',
        changePageText: 'Lista de Usuarios'
      })
    }

    if(this.state.showPage === 'userdetails'){
      this.setState({
        showPage: 'listpage',
        changePageText: 'Pagina de Cadastro'
      })
    }

  }

  getUserID = (userID) => {
    this.setState({
      currentUserID: userID,
      showPage: 'userdetails',
      changePageText: 'Voltar',
    })
  }

  render(){
    let currentPage

    if(this.state.showPage === 'cadastro'){
      currentPage = <Cadastro />
    }

    if(this.state.showPage === 'listpage'){
      currentPage = <ListPage getUserID={this.getUserID}/>
    }

    if(this.state.showPage === 'userdetails'){
      currentPage = <UserDetailsPage userID={this.state.currentUserID}/>
    }

    return(
      <MainDiv>
        <button onClick={this.changePage}>{this.state.changePageText}</button>
        {currentPage}
      </MainDiv>
    )
  }

}

export default App;
