import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as CTPS from "./CreateTripStyles";
import SmallLogo from "../../Images/futurexlogo.png";
import MidLogo from "../../Images/FutureXTitle.png";
import Button from '@material-ui/core/Button';
import { getTrips } from '../Actions/WebsiteActions';
import { routes } from '../Router';

class CreateTripPage extends Component {
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
  }


  render() {
    console.log(this.props.trips)
    return (
      <CTPS.MainDiv>

        <CTPS.CustomHeader>
          <CTPS.SmallLogo src={SmallLogo} onClick={this.props.goToHomePage}/>
          <CTPS.MidLogo src={MidLogo}></CTPS.MidLogo>
        </CTPS.CustomHeader>

        <div>Oi</div>
        <div>Oi</div>
        <div>Oi</div>
        <div>Oi</div>
        <div>Oi</div>
        <div>Oi</div>
        <div>Oi</div>
        <div>Oi</div>
        <div>Oi</div>
        <div>Oi</div>
        <div>Oi</div>
        <div>Oi</div>
        <div>Oi</div>
        <div>Oi</div>
        <div>Oi</div>
        <div>Oi</div>
        <div>Oi</div>
        <div>Oi</div>
        <div>Oi</div>

        <CTPS.Footer>
          <h3>Para mais informações favor entrar em contato com qualquer uma de nossas redes sociais:</h3>
          <CTPS.FooterLogo src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png5.png?fit=696%2C624&ssl=1"/>
          <CTPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"/>
          <CTPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png"/>
          <CTPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01.png" />
          <CTPS.FooterLogo src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png"/>
        </CTPS.Footer>

      </CTPS.MainDiv>
    );
  }
}

const mapStateToProps = (state) => ({
})

function mapDispatchToProps(dispatch){
  return{
    goToHomePage: () => dispatch(push(routes.HomePage)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTripPage)