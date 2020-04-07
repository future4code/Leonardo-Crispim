import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as LTPS from "./ListTripsPageStyles";
import SmallLogo from "../../Images/futurexlogo.png";
import MidLogo from "../../Images/FutureXTitle.png";
import Button from '@material-ui/core/Button';
import { getTrips, setTripIdAndPush } from '../Actions/WebsiteActions';
import { routes } from '../Router';

class ListTripsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token");

    if(token === null){
      this.props.goToLoginPage();
    }

    this.props.getTrips();
  }


  render() {
    return (
      <LTPS.MainDiv>

        <LTPS.CustomHeader>
          <LTPS.SmallLogo src={SmallLogo} onClick={this.props.goToHomePage}/>
          <LTPS.MidLogo src={MidLogo}></LTPS.MidLogo>
        </LTPS.CustomHeader>

        <Button variant="contained" size="medium" color="primary" onClick={this.props.goToCreateTripPage}>Criar nova viagem</Button>

        <LTPS.MainTitle>Viagens Disponiveis:</LTPS.MainTitle>

          {this.props.trips.map(trip =>(
            <LTPS.MainGrid>
            <LTPS.GridSlot1>
              <LTPS.TripName>{trip.name}</LTPS.TripName>
            </LTPS.GridSlot1>

            <LTPS.GridSlot2>
              <LTPS.TripName>{trip.planet}</LTPS.TripName>
              <LTPS.TripDate>{trip.date}</LTPS.TripDate>
              <LTPS.TripDetails>{trip.duration}</LTPS.TripDetails>
              <LTPS.TripDescription>{trip.description}</LTPS.TripDescription>
              <Button onClick={() =>this.props.goToTripDetailsPage(trip.id)} color="primary" variant="contained" size="small">Ver Detalhes</Button>
            </LTPS.GridSlot2>
            </LTPS.MainGrid>
          ))}

        <LTPS.Footer>
          <h3>Para mais informações favor entrar em contato com qualquer uma de nossas redes sociais:</h3>
          <LTPS.FooterLogo src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png5.png?fit=696%2C624&ssl=1"/>
          <LTPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"/>
          <LTPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png"/>
          <LTPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01.png" />
          <LTPS.FooterLogo src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png"/>
        </LTPS.Footer>

      </LTPS.MainDiv>
    );
  }
}

const mapStateToProps = (state) => ({
  trips: state.trips.tripsList
})

function mapDispatchToProps(dispatch){
  return{
    goToHomePage: () => dispatch(push(routes.HomePage)),
    goToLoginPage: () => dispatch(push(routes.LoginPage)),
    goToCreateTripPage: () => dispatch(push(routes.CreateTripPage)),
    getTrips: () => dispatch(getTrips()),
    goToTripDetailsPage: (tripID) => dispatch(setTripIdAndPush(tripID)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTripsPage)