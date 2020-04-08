import React from "react";
import { connect } from "react-redux";
import * as PS from "./PlannerStyles";
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { getTasks } from '../../actions/WebsiteActions';

class Planner extends React.Component {

  componentDidMount(){
    this.props.getTasks()
  }

  render() {
    return (
      <PS.MainDiv>
        <PS.InputForm>
          <InputLabel htmlFor="dia-semana">Dia da Semana</InputLabel>

          <Select
            // value={this.state.age}
            // onChange={this.handleChange}
            inputProps={{
              name: 'DiaSemana',
              id: 'dia-semana',
            }}
            >
            <MenuItem value={"segunda"}>Segunda-Feira</MenuItem>
            <MenuItem value={"terca"}>Terca-Feira</MenuItem>
            <MenuItem value={"quarta"}>Quarta-Feira</MenuItem>
            <MenuItem value={"quinta"}>Quinta-Feira</MenuItem>
            <MenuItem value={"sexta"}>Sexta-Feira</MenuItem>
            <MenuItem value={"sabado"}>Sabado</MenuItem>
            <MenuItem value={"domingo"}>Domingo</MenuItem>
          </Select>

          <TextField
            // onChange={this.handleFieldChange}
            name="inputTask"
            type="inputTask"
            label="Nome da Tarefa"
            // value={signupUsername}
            required
          />

          <Button variant="contained" color="primary" size="small">Enviar</Button>
        </PS.InputForm>

        <hr></hr>

        <PS.WeekGrid>
          <PS.WeekDay>Segunda</PS.WeekDay>
          <PS.WeekDay>Terca</PS.WeekDay>
          <PS.WeekDay>Quarta</PS.WeekDay>
          <PS.WeekDay>Quinta</PS.WeekDay>
          <PS.WeekDay>Sexta</PS.WeekDay>
          <PS.WeekDay>Sabado</PS.WeekDay>
          <PS.WeekDay>Domingo</PS.WeekDay>

          <PS.WeekTaskList>
            <PS.Task>Hi</PS.Task>
            <PS.Task>Test</PS.Task>
            <PS.Task>Test</PS.Task>
            <PS.Task>Test</PS.Task>
          </PS.WeekTaskList>
        </PS.WeekGrid>
      </PS.MainDiv>
    )
  }
}

const mapStateToProps = (state) => ({
  // tasks: state.tasks.taskList
})

function mapDispatchToProps(dispatch){
    return{
      getTasks: () => dispatch(getTasks()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Planner);