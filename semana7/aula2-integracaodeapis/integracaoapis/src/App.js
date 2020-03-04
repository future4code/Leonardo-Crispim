import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Cadastro from './Cadastro';
import ListPage from './ListPage';

const MainDiv = styled.div`
`

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      showPage: 'cadastro',
      changePageText: 'Lista de Usuarios'
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

  }

  render(){
    let currentPage

    if(this.state.showPage === 'cadastro'){
      currentPage = <Cadastro />
    }

    if(this.state.showPage === 'listpage'){
      currentPage = <ListPage />
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
