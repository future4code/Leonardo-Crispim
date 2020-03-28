import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as TDPS from "./TripDetailsPageStyles";
import SmallLogo from "../../Images/futurexlogo.png";
import MidLogo from "../../Images/FutureXTitle.png";
import Button from '@material-ui/core/Button';
import { routes } from '../Router';
import { getTripDetails, setApprovedCandidate } from '../Actions/WebsiteActions';

class TripDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const { getTripDetails, selectedTripID, goToLoginPage, goToListTripsPage } = this.props
    const token = window.localStorage.getItem("token");

    if (token === null) {
      goToLoginPage();
    }

    if (selectedTripID === null) {
      goToListTripsPage()
    }

    getTripDetails(selectedTripID)

  }

  render() {
    const { tripDetails } = this.props
    return (
      <TDPS.MainDiv>

        <TDPS.CustomHeader>
          <TDPS.SmallLogo src={SmallLogo} onClick={this.props.goToHomePage} />
          <TDPS.MidLogo src={MidLogo}></TDPS.MidLogo>
        </TDPS.CustomHeader>

        <TDPS.MainTitle>Detalhes da Viagem:</TDPS.MainTitle>

        <h1>Viagem: {tripDetails && tripDetails.name}</h1>
        <h2>Duracao: {tripDetails && tripDetails.durationInDays} dias.</h2>
        <h3>Data: {tripDetails && tripDetails.date}</h3>
        <h4>Planeta: {tripDetails && tripDetails.planet}</h4>
        <h5>Descricao: {tripDetails && tripDetails.description}</h5>

        <p>Lista de Aprovados:</p>
        {tripDetails && tripDetails.approved.map(traveler => (
          <li>{traveler.name}</li>
        ))}

        <p>Lista de Candidatos:</p>
        {tripDetails && tripDetails.candidates.map(candidate => (
          <li>{candidate.name} <Button onClick={() => this.props.setApprovedCandidate(tripDetails.id, candidate.id)} variant="contained" size="small" color="primary">Aprovar</Button> </li>
        ))}


        <TDPS.Footer>
          <h3>Para mais informações favor entrar em contato com qualquer uma de nossas redes sociais:</h3>
          <TDPS.FooterLogo src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png5.png?fit=696%2C624&ssl=1" />
          <TDPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" />
          <TDPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" />
          <TDPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01.png" />
          <TDPS.FooterLogo src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png" />
        </TDPS.Footer>

      </TDPS.MainDiv>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedTripID: state.trips.selectedTripID,
  tripDetails: state.trips.tripDetails,
})

function mapDispatchToProps(dispatch) {
  return {
    goToHomePage: () => dispatch(push(routes.HomePage)),
    goToLoginPage: () => dispatch(push(routes.LoginPage)),
    goToListTripsPage: () => dispatch(push(routes.ListTripsPage)),
    getTripDetails: (tripID) => dispatch(getTripDetails(tripID)),
    setApprovedCandidate: (tripID, candidateID) => dispatch(setApprovedCandidate(tripID, candidateID)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage)