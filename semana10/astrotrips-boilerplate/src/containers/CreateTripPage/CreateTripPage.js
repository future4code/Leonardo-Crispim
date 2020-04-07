import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as CTPS from "./CreateTripStyles";
import SmallLogo from "../../Images/futurexlogo.png";
import MidLogo from "../../Images/FutureXTitle.png";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { submitNewTrip } from '../Actions/WebsiteActions';
import { routes } from '../Router';

class CreateTripPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    const token = window.localStorage.getItem("token");

    if (token === null) {
      this.props.goToLoginPage();
    }
  }

  handleInputChange = (event) => {
    //const name = event.target.name
    //const value = event.targe.value
    const { value, name } = event.target

    //setState abaixo cria um novo state baseado no que foi requerido e ja adiciona o valor
    //ou ele apenas atualiza o valor de um estado ja criado antes
    //com essa tecnica nao e nescessario criar um state (ou funcao) para cada input
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      },
    })
  }

  handleTripSubmit = (event) => {
    event.preventDefault()

    this.props.submitNewTrip(this.state.form)
  }


  render() {
    return (
      <CTPS.MainDiv>

        <CTPS.CustomHeader>
          <CTPS.SmallLogo src={SmallLogo} onClick={this.props.goToHomePage} />
          <CTPS.MidLogo src={MidLogo}></CTPS.MidLogo>
        </CTPS.CustomHeader>

        <CTPS.ApplicationFormContainer onSubmit={this.handleTripSubmit}>

          <TextField
            id="tripNameInputID"
            required
            label="Nome da Viagem"
            name="name"
            onChange={this.handleInputChange}
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="planetNameInputID"
            required
            label="Planeta"
            name="planet"
            onChange={this.handleInputChange}
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="tripDescriptionTextInputID"
            required
            label="Descricao da Viagem"
            name="description"
            onChange={this.handleInputChange}
            style={{ margin: 8 }}
            fullWidth
            multiline="true"
            rows="4"
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="tripDurationInputID"
            type="number"
            required
            label="Duracao da viagem em dias"
            name="durationInDays"
            onChange={this.handleInputChange}
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="tripDateInputID"
            type="date"
            required
            label="Data da Viagem"
            name="date"
            onChange={this.handleInputChange}
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button type="submit" variant="contained" color="primary" size="large">Criar Viagem</Button>

        </CTPS.ApplicationFormContainer>

        <CTPS.Footer>
          <h3>Para mais informações favor entrar em contato com qualquer uma de nossas redes sociais:</h3>
          <CTPS.FooterLogo src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png5.png?fit=696%2C624&ssl=1" />
          <CTPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" />
          <CTPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" />
          <CTPS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01.png" />
          <CTPS.FooterLogo src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png" />
        </CTPS.Footer>

      </CTPS.MainDiv>
    );
  }
}

const mapStateToProps = (state) => ({
})

function mapDispatchToProps(dispatch) {
  return {
    goToHomePage: () => dispatch(push(routes.HomePage)),
    submitNewTrip: (tripData) => dispatch(submitNewTrip(tripData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTripPage)