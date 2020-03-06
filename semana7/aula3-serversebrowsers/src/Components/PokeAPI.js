import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const MainDiv = styled.div`
text-align: center;
`

class PokeAPI extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
        pokeList: [],
        selectedPokemon: undefined,
    }
  }

  componentDidMount(){
    this.get151Pokemons();
  }

  get151Pokemons = async () =>{
      try{
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`)

          this.setState({
              pokeList: response.data.results
          })

          console.log(this.state.pokeList)
      }

      catch(error){
          console.log(error)
      }
  }

  handlePokemonPick = (event) =>{
    const selectedPokemonURL = event.target.value;

    const PokemonDetailsPromise = axios.get(selectedPokemonURL);

    PokemonDetailsPromise.then((response) =>{
        const pokemonSprite = response.data.sprites.front_default;

        this.setState({
            selectedPokemon: pokemonSprite
        })
    }).catch((error) => {
        alert("Pokemon nao encontrado")
        console.log(error)
    })
  }

  render(){
    return(
      <MainDiv>
          <h3>Escolha seu Pokemon</h3>

          <select onChange={this.handlePokemonPick}>
              <option>Selecione um Pokemon</option>
            {this.state.pokeList.map((pokemon) =>
                <option value={pokemon.url}>
                    {pokemon.name}
                </option>
            )}
          </select>
            {this.state.selectedPokemon && (
                <img src={this.state.selectedPokemon}></img>
            )}
      </MainDiv>
    )
  }

}

export default PokeAPI;
