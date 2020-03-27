import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as TDPS from "./TripDetailsPageStyles";
import SmallLogo from "../../Images/futurexlogo.png";
import MidLogo from "../../Images/FutureXTitle.png";
import Button from '@material-ui/core/Button';
import { routes } from '../Router';
import { getTripDetails } from '../Actions/WebsiteActions';

class TripDetailsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const {getTripDetails, selectedTripID, goToLoginPage, goToListTripsPage} = this.props
    const token = window.localStorage.getItem("token");

    if(token === null){
      goToLoginPage();
    }

    if(selectedTripID === null){
      goToListTripsPage()
    }

    getTripDetails(selectedTripID)

  }

  render() {
    console.log(this.props.tripDetails)
    return (
      <TDPS.MainDiv>

        <TDPS.CustomHeader>
          <TDPS.SmallLogo src={SmallLogo} onClick={this.props.goToHomePage}/>
          <TDPS.MidLogo src={MidLogo}></TDPS.MidLogo>
        </TDPS.CustomHeader>

        <TDPS.MainTitle>Detalhes da Viagem:</TDPS.MainTitle>

        <p>Hello!</p>
        {this.props.tripDetails && this.props.tripDetails.id}
        {/* {
          ID
          name
          description
          planet
          durationindays
          date
          approved: []
        } */}


        <TDPS.Footer>
          <h3>Para mais informações favor entrar em contato com qualquer uma de nossas redes sociais:</h3>
          <TDPS.FooterLogo src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png5.png?fit=696%2C624&ssl=1"/>
          <TDPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"/>
          <TDPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png"/>
          <TDPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01.png" />
          <TDPS.FooterLogo src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png"/>
        </TDPS.Footer>

      </TDPS.MainDiv>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedTripID: state.trips.selectedTripID,
  tripDetails: state.trips.tripDetails,
})

function mapDispatchToProps(dispatch){
  return{
    goToHomePage: () => dispatch(push(routes.HomePage)),
    goToLoginPage: () => dispatch(push(routes.LoginPage)),
    goToListTripsPage: () => dispatch(push(routes.ListTripsPage)),
    getTripDetails: (tripID) => dispatch(getTripDetails(tripID)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripDetailsPage)