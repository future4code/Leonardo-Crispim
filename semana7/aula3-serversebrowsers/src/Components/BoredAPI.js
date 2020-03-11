import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
    }
`

const MainDiv = styled.div`
`

const InputText = styled.span`
`

const ParticipantsInput = styled.input`
`

const GitHeaderLink = styled.img`
height: 30px;
width: 60px;
margin-bottom: -5px;
margin-right: 10px;
margin-left: 10%;
`

const FooterLink = styled.img`
height: 40px;
width: 40px;
margin-left: 5px;
margin-right: 5px;
`

const GridContainerLeft = styled.div`
border-right: solid black 1px;
text-align: center;
height: 481px;
border-bottom: solid black 2px;
`

const GridContainerMid = styled.div`
text-align: center;
height: 481px;
border-bottom: solid black 2px;
`

const HeaderSpan = styled.span`
margin-left: 41%;
margin-right: 20%;
`

const GridContainerRight = styled.div`
border-left: solid black 1px;
text-align: center;
height: 481px;
border-bottom: solid black 2px;
`

const GridImage = styled.img`
height: 350px;
width: 440px;
`

const MainGrid = styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
`

const CustomHeader = styled.header`
height: 15%;
background-color: red;
font-size: 25px;
color: white;
padding: 10px;
`

const CustomFooter = styled.footer`
background-color: red;
padding: 50px;
font-size: 20px;
color: white;
text-align: center;
`

const GridImageMid = styled.img`
height: 351px;
width: 440px;
margin-top: 0.51%;
`

const SearchButton = styled.button`
display: block;
margin-left: auto;
margin-right: auto;
margin-top: 15px;
margin-bottom: 15px;
`

const CustomP = styled.p`
margin-top: 1%;
`

const RedDiv = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
background-color: red;
color: white;
text-align: center;
margin-top: -17px;
height: 200px;
font-size: 17px;
`

const WhiteDiv = styled.div`
background-color: white;
color: black;
text-align: center;
`

class BoredAPI extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
        currentActivity: undefined,
        currentType: 'education',
        currentParticipantsNum: 1,
        currentKey: undefined,
    }
  }

  componentDidMount(){
    this.getRandomActivity();
  }

  getRandomActivity = async () =>{
    try{
        const response = await axios.get(`http://www.boredapi.com/api/activity/`)

        this.setState({
            currentActivity: response.data
        })
    }
    catch(error){
        console.log(error)
    }
  }

  handleChangeParticipants = (event) =>{
    const newParticipantsNum = event.target.value

    this.setState({
        currentParticipantsNum: newParticipantsNum
    })
  }

  getActivityByParticipants = async () =>{
    const response = await axios.get(
    `http://www.boredapi.com/api/activity/?participants=${this.state.currentParticipantsNum}`)

    this.setState({
        currentActivity: response.data
    })
  }

  getActivityByType = async () =>{
    try{
        const response = await axios.get(
            `http://www.boredapi.com/api/activity/?type=${this.state.currentType}`)
        
            this.setState({
                currentActivity: response.data
            })
    }
    catch(error){
        console.log(error)
    }
  }

  getActivityByID = async () =>{
    const response = await axios.get(
        `http://www.boredapi.com/api/activity/?key=${this.state.currentKey}`)
    
        this.setState({
            currentActivity: response.data
        })
  }

  handleChangeType = (event) =>{
    const newType = event.target.value;

    this.setState({
        currentType: newType
    })
  }

  handleChangeID = event =>{
    const newID = event.target.value;

    this.setState({
        currentKey: newID
    })

  }

  render(){
    return(
      <MainDiv>
        <GlobalStyle></GlobalStyle>

        <CustomHeader>
            <HeaderSpan>Bem Vindo ao Mata Tedio!</HeaderSpan>
            <a href="https://github.com/">
                <GitHeaderLink href="https://github.com/" src="https://git-scm.com/images/logos/downloads/Git-Logo-Black.png"/>
            </a>
        </CustomHeader>

        <MainGrid>
            <GridContainerLeft>
                <h3>Por Numero de Participantes!</h3>
                <InputText>Numero de Participantes:</InputText>
                <ParticipantsInput 
                    value={this.state.currentParticipantsNum} 
                    placeholder="1" 
                    type="number" 
                    onChange={this.handleChangeParticipants} 
                />
                <SearchButton onClick={this.getActivityByParticipants}>Procurar Atividade</SearchButton>
                <GridImage src="https://1.bp.blogspot.com/-jmDpdgGVTXU/WQY90CgANqI/AAAAAAAAK6s/RO_YID_vHRQMh_-Mii6Z-TJ4E5vcyP4FQCLcB/s1600/ellhnes.jpg"/>
            </GridContainerLeft>

            <GridContainerMid>
            <h3>Por Tipo de Atividades!</h3>
                <select onChange={this.handleChangeType}>
                    <option>education</option>
                    <option>recreational</option>
                    <option>social</option>
                    <option>diy</option>
                    <option>charity</option>
                    <option>cooking</option>
                    <option>relaxation</option>
                    <option>busywork</option>
                </select>
                <SearchButton onClick={this.getActivityByType}>Procurar Atividade</SearchButton>
                <GridImageMid src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80"/>
            </GridContainerMid>

            <GridContainerRight>
            <h3>Por ID!</h3>
                <InputText>Procurar ID: </InputText>
                <input onChange={this.handleChangeID} type="text"></input>
                <SearchButton onClick={this.getActivityByID}>Procurar Atividade</SearchButton>
                <GridImage src="https://www.raconteur.net/wp-content/uploads/2019/09/RAA_p03_01-e1567611001503.jpg"/>

            </GridContainerRight>

        </MainGrid>

        <RedDiv>
            <p>Este site é meramente ilustrativo de como se utilizar uma API em um treinamento.</p>
            <p>Mas nao deixe se enganar! Suas funcionalidades são bem uteis para tentar tirar você e seus amigos do tédio :D</p>
            <p>Essa API funciona disponibilizando uma atividade aleatoria e os detalhes sobre ela. (Exemplo abaixo)</p>
            <p>Enquanto esse site pode configurar alguns parametros de busca de atividades que estão armazenadas na API.</p>
        </RedDiv>

        <WhiteDiv>
            <h3>Resultado Atual:</h3>
            {this.state.currentActivity && (
                <div>
                    <CustomP>Atividade: {this.state.currentActivity.activity}</CustomP>
                    <CustomP>Acessibilidade: {this.state.currentActivity.accessibility}</CustomP>
                    <CustomP>Tipo: {this.state.currentActivity.type}</CustomP>
                    <CustomP>Participantes: {this.state.currentActivity.participants}</CustomP>
                    <CustomP>Custo: {this.state.currentActivity.price}</CustomP>
                    <CustomP>Link: {this.state.currentActivity.link}</CustomP>
                    <CustomP>ID: {this.state.currentActivity.key}</CustomP>
                </div>
                )}
        </WhiteDiv>

        <CustomFooter>
            <a href="https://www.linkedin.com/in/leonardo-crispim-371a23134/">
                <FooterLink src="https://image.flaticon.com/icons/png/512/49/49408.png" />
            </a>
        
            <a href="https://github.com/SevenBlueBunnies">
                <FooterLink src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" />
            </a>
        
            <a href="https://www.facebook.com/leonardo.crispim.961">
                <FooterLink src="https://pngimage.net/wp-content/uploads/2018/05/facebook-logo-black-png-2.png"/>
            </a>
    
            <p>Mais duvidas? Entre em contato com o meu e-mail: Leonardo.Crispim@outlook.com.br</p>
        </CustomFooter>

        </MainDiv>
    )
  }

}

export default BoredAPI;
