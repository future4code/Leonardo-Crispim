import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as HPS from "./HomePageStyles";
import SmallLogo from "../../Images/futurexlogo.png";
import MidLogo from "../../Images/FutureXTitle.png";
import Button from '@material-ui/core/Button';
import { routes } from '../Router';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <HPS.MainDiv>

        <HPS.CustomHeader>
          <HPS.SmallLogo src={SmallLogo} onClick={this.props.goToHomePage}/>
          <HPS.MidLogo src={MidLogo}></HPS.MidLogo>
          <Button variant="outlined" onClick={this.props.goToLoginPage}>
            Login
          </Button>
        </HPS.CustomHeader>

        <HPS.MainTitle>Agende sua viagem dos sonhos hoje!</HPS.MainTitle>

        <h3>Veja algumas viagens ja feitas por nossos clientes:</h3>

        <HPS.MainGrid>

          <HPS.GridSlot>
            <h2>Colonia de Marte</h2>
            <HPS.GridImage src="https://i.pinimg.com/originals/ec/e2/22/ece222d8e02ed658461668b7f908f5df.jpg"/>
            <p>Todo mundo precisa de espaço... então por que não garantir o seu do outro lado da galaxia?</p>
          </HPS.GridSlot>

          <HPS.GridSlot>
            <h2>Getaway na Lua</h2>
            <HPS.GridImage src="https://i.pinimg.com/originals/d9/35/4e/d9354e6118fe9d22dac8411bad431c47.png"/>
            <p>Uma viagem luxuosa e romantica para a grande esfera branca que sobrevoa nosso planeta.</p>
          </HPS.GridSlot>

          <HPS.GridSlot>
            <h2>Pulo em outra dimensão!</h2>
            <HPS.GridImage src="https://i1.wp.com/metro.co.uk/wp-content/uploads/2019/08/Screenshot-2019-08-20-at-14.55.10-0964.png?quality=90&strip=all&zoom=1&resize=644%2C360&ssl=1"/>
            <p>Para os ousados que desejam ver o que tem do outro lado!</p>
          </HPS.GridSlot>

        </HPS.MainGrid>

        <HPS.FinalDiv>
          <h3>Interessado?</h3>
          <Button onClick={this.props.goToApplyPage} variant="contained" color="primary" size="large">
            Candidate-se agora!
          </Button>
        </HPS.FinalDiv>

      </HPS.MainDiv>
    );
  }
}

function mapDispatchToProps(dispatch){
  return{
    goToHomePage: () => dispatch(push(routes.HomePage)),
    goToLoginPage: () => dispatch(push(routes.LoginPage)),
    goToApplyPage: () => dispatch(push(routes.ApplyPage)),
    goToListTripsPage: () => dispatch(push(routes.ListTripsPage)),
    goToTripDetailsPage: () => dispatch(push(routes.TripDetailsPage)),
  }
}

export default connect(null, mapDispatchToProps)(HomePage)