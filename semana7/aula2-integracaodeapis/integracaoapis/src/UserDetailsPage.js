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
    }
  }


  render(){
    return(
      <MainDiv>
          <h3>Usuario:</h3>
          <h2>Email:</h2>
      </MainDiv>
    )
  }

}

export default UserDetailsPage;
