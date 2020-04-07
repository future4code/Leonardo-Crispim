import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as LPS from "./LoginPageStyles";
import SmallLogo from "../../Images/futurexlogo.png";
import MidLogo from "../../Images/FutureXTitle.png";
import { login } from "../Actions/Auth";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogin = (event) =>{
    event.preventDefault();

    const { email, password } = this.state

    this.props.login(email, password)
  }

  render() {
    const { email, password } = this.state;

    return (
      <LPS.MainDiv>
        
          <LPS.CustomHeader>
            <LPS.SmallLogo src={SmallLogo} onClick={this.props.goToHomePage} />
            <LPS.MidLogo src={MidLogo}></LPS.MidLogo>
          </LPS.CustomHeader>

        <LPS.LoginWrapper onSubmit={this.handleLogin}>
          <TextField
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            label="E-mail"
            required
            value={email}
          />

          <TextField
            onChange={this.handleFieldChange}
            name="password"
            type="password"
            label="Password"
            required
            value={password}
          />

          <Button type="submit">Login</Button>

        </LPS.LoginWrapper>
      </LPS.MainDiv>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToHomePage: () => dispatch(push(routes.HomePage)),
    login: (email, password) => dispatch(login(email, password)),
  }
}

export default connect(null, mapDispatchToProps)(LoginPage)
