import React from 'react';
import axios from 'axios';
import * as CC from './Components/CustomComponents'
import Playlists from './Components/Playlists';
import PlaylistPage from './Components/PlaylistPage';

const baseURL = `https://us-central1-spotif4.cloudfunctions.net/api`;

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
      currentPlaylistName: "",
      renderingPage: 'Playlists',
      selectedPlaylistID: '',
      selectedPlaylistName: '',
      songArtistName: '',
      songLink: '',
      songName: '',
    }
  }

  handlePLInputChange = (event) => {
    const newPLName = event.target.value;

    this.setState({currentPlaylistName: newPLName})
  }

  triggerChildUpdateRender(){
    this.refs.child.getAllPlaylists();
  }

  createNewPlaylist = async () =>{
    const dataNewPlaylist = {
      name: this.state.currentPlaylistName
    }

    try{
     const response = await axios.post(`${baseURL}/playlists/createPlaylist`, dataNewPlaylist, {
        headers: {
          'auth' : 'leoc'
        },
      })
      this.setState({currentPlaylistName: ""})
      this.triggerChildUpdateRender()
      alert("Playlist criada com sucesso!")
    }

    catch(error){
      console.log(error)
      alert("Erro na criacao de Playlist.")
    }
  }

  getPlaylistID = (playlistID, playlistName) =>{
    this.setState({
      selectedPlaylistID: playlistID,
      selectedPlaylistName: playlistName,
      renderingPage: 'PlaylistPage'
    })
}

  handleSongNameChange = (event) =>{
    const newSongName = event.target.value
    this.setState({
      songName: newSongName
    })
  }

  handleBandNameChange = (event) =>{
    const newBandName = event.target.value
    this.setState({
      songArtistName: newBandName
    })
  }

  handleSongURLhange = (event) =>{
    const newSongURL = event.target.value
    this.setState({
      songLink: newSongURL
    })
  }

  addNewSongToPlaylist = async () =>{
    if(this.state.songName === '' || this.state.songArtistName === '' || this.state.songArtistName === ''){
      alert("Favor preencha todos os dados antes de tentar adicionar uma nova musica.")
    }
    else{
      try{
        const dataNewSong ={
          playlistId: this.state.selectedPlaylistID,
          Music:{
            name: this.state.songName,
            artist: this.state.songArtistName,
            url: this.state.songLink,
          }
        }
        const response = await axios.put(`${baseURL}/playlists/addMusicToPlaylist`, dataNewSong,{
          headers:{
            'auth' : 'leoc'
          }
        })
        alert("Musica adicionada com sucesso!")
      }
      catch(error){
        console.log(error)
      }
    }
  }

  render(){
    let currentPage

    if(this.state.renderingPage === 'Playlists'){
      currentPage = <Playlists getPlaylistID={this.getPlaylistID} ref="child"/>
    }

    else{
      currentPage = <PlaylistPage playlistName={this.state.selectedPlaylistName} playlistID={this.state.selectedPlaylistID} />
    }

    return(
      <CC.AppMainDiv>
        <CC.GlobalStyle />
        <CC.AppHeader>
          <h1>Spotif4 - Leonardo Crispim</h1>
        </CC.AppHeader>

        {this.state.renderingPage === 'Playlists' && 
        <div>
          <CC.CreatePLDiv>
            Escolha um nome e crie sua Playlist agora! 
            <CC.CreatePLInput onChange={this.handlePLInputChange} value={this.state.currentPlaylistName} />
           <CC.CreatePLButton onClick={this.createNewPlaylist}>Criar Playlist</CC.CreatePLButton>
          </CC.CreatePLDiv>
        </div>
        }

        {this.state.renderingPage !== 'Playlists' &&
        <div>
          <CC.NewSongDiv>
            <CC.PLPageHeaderText1>Adicione uma nova Musica!</CC.PLPageHeaderText1>
            <span>Nome da Musica:</span>
            <input onChange={this.handleSongNameChange}></input>
            <span>Artista/Banda:</span>
            <input onChange={this.handleBandNameChange}></input>
            <span>URL:</span>
            <input onChange={this.handleSongURLChange}></input>
            <button onClick={this.addNewSongToPlaylist}>Adicionar Musica</button>
          </CC.NewSongDiv>
        </div>
        }

        {currentPage}

        <CC.FooterDiv>something here</CC.FooterDiv>
      </CC.AppMainDiv>
    )
  }

}

export default App;
