import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import BoredAPI from './Components/BoredAPI';
import PokeAPI from './Components/PokeAPI';

const MainDiv = styled.div`
`

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
    }
  }

  render(){
    return(
      <MainDiv>
        <BoredAPI />
        {/* <PokeAPI></PokeAPI> */}
      </MainDiv>
    )
  }

}

export default App;
