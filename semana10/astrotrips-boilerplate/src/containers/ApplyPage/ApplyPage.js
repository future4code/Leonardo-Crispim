import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import SmallLogo from "../../Images/futurexlogo.png";
import MidLogo from "../../Images/FutureXTitle.png";
import Button from '@material-ui/core/Button';
import { routes } from '../Router';
import * as APS from "./ApplyPageStyles";
import TextField from '@material-ui/core/TextField';
import { getTrips, submitApplication } from '../Actions/WebsiteActions';

class ApplyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
      countriesAvailable: ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"],
    };
  }

  componentDidMount() {
    this.props.getTrips()
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

  handleApplicationSubmit = (event) => {
    event.preventDefault()

    this.props.submitApplication(this.state.form)
  }

  render() {
    return (
      <APS.MainDiv>

        <APS.CustomHeader>
          <APS.SmallLogo src={SmallLogo} onClick={this.props.goToHomePage} />
          <APS.MidLogo src={MidLogo}></APS.MidLogo>
        </APS.CustomHeader>

        <h3>Dados do Candidato:</h3>

        <APS.ApplicationFormContainer onSubmit={this.handleApplicationSubmit}>

          <TextField
            id="nameInputID"
            required
            label="Nome"
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
            id="ageInputID"
            required
            label="Idade"
            name="age"
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
            id="applicationTextInputID"
            required
            label="Texto de aplicacao"
            name="applicationText"
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
            id="professionInputID"
            required
            label="Profissao Atual"
            name="profession"
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
            id="countrySelectID"
            required
            select
            label="Pais"
            name="country"
            value={this.state.selectedCountry}
            onChange={this.handleInputChange}
            style={{ margin: 8 }}
            InputLabelProps={{
              shrink: true,
            }}
            SelectProps={{
              native: true,
            }}
            margin="normal"
            variant="outlined"
          >
            {this.state.countriesAvailable.map(option => (
              <option key={option.id} value={option}>
                {option}
              </option>
            ))}
          </TextField>

          <TextField
            id="tripSelectID"
            required
            select
            label="Viagem"
            name="tripID"
            value={this.state.selectedTripID}
            onChange={this.handleInputChange}
            style={{ margin: 8 }}
            InputLabelProps={{
              shrink: true,
            }}
            SelectProps={{
              native: true,
            }}
            margin="normal"
            variant="outlined"
          >
            {this.props.trips.map(trip => (
              <option key={trip.id} value={trip.id}>
                {trip.name}
              </option>
            ))}
          ))
        </TextField>

          <Button type="submit" variant="contained" color="primary" size="large">Enviar Aplicacao</Button>

        </APS.ApplicationFormContainer>

        <APS.Footer>
          <h3>Para mais informações favor entrar em contato com qualquer uma de nossas redes sociais:</h3>
          <APS.FooterLogo src="https://i2.wp.com/www.multarte.com.br/wp-content/uploads/2019/03/logo-facebook-png5.png?fit=696%2C624&ssl=1" />
          <APS.FooterLogo src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" />
          <APS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/04/instagram-logo.png" />
          <APS.FooterLogo src="https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01.png" />
          <APS.FooterLogo src="https://images.vexels.com/media/users/3/137382/isolated/preview/c59b2807ea44f0d70f41ca73c61d281d-linkedin-icon-logo-by-vexels.png" />
        </APS.Footer>

      </APS.MainDiv>
    );
  }
}

const mapStateToProps = (state) => ({
  trips: state.trips.tripsList
})

function mapDispatchToProps(dispatch) {
  return {
    goToHomePage: () => dispatch(push(routes.HomePage)),
    getTrips: () => dispatch(getTrips()),
    submitApplication: (applicationData) => dispatch(submitApplication(applicationData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplyPage)