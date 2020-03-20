import React from 'react';
import * as CS from './Styles'
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import { addTaskToList } from "../Actions/listActions";
import { deleteTaskFromList } from "../Actions/listActions";
import { toggleTaskCompletion } from "../Actions/listActions";
import { removeAllCompletedTasks } from "../Actions/listActions";
import { setFilter } from "../Actions/listActions";
import { getTasks } from "../Actions/listActions";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ErrorIcon from '@material-ui/icons/Error';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    }
  }

  handleOnWriteTask = (event) => {
    this.setState({
      userInput: event.target.value
    })
  }

  saveTask = (event) => {
    if (event.key === "Enter") {
      this.props.callAddTaskToList(this.state.userInput)
      this.setState({
        userInput: ""
      })
    }
  }

  deleteTask = (id) => {
    this.props.callDeleteTaskFromList(id)
  }

  completeTask = (id) => {
    this.props.callToggleTaskCompletion(id)
  }

  checkList = () => {
    console.log(this.props.tasks)
  }

  removeAllCompletedTasks = () => {
    this.props.callRemoveAllCompletedTasks()
  }

  setFilter = (filter) => {
    this.props.callSetFilter(filter)
  }

  componentDidMount(){
    this.props.callGetTasks()
  }

  render() {
    console.log(this.props.tasks)
    return (
      <CS.AppMainDiv>
        <CS.TaskTitle>
          4Task
        </CS.TaskTitle>

        <CS.TaskListArea>

          <TextField
            id="outlined-full-width"
            label="Tarefa"
            style={{ margin: 8 }}
            placeholder="Adicione uma tarefa!"
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={this.handleOnWriteTask}
            value={this.state.userInput}
            onKeyDown={this.saveTask}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <List>
            {this.props.tasks.filter((task) => {
              const filter = this.props.filter
              if (filter === 'completed') {
                return task.done === true
              }
              if (filter === 'incomplete') {
                return task.done === false
              }
              if (filter === 'all') {
                return true
              }
            }).map(task => (
              <ListItem key={task.id} button>
                <ListItemText primary={task.text} />
                <ListItemSecondaryAction>
                  <Checkbox color="primary" onClick={() => this.completeTask(task.id)} checked={task.done} />
                  <Fab color="secondary" aria-label="Add" size="small" onClick={() => this.deleteTask(task.id)}>
                    X
                  </Fab>
                </ListItemSecondaryAction>
              </ListItem>
            ))}

            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Controle de Itens</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                  <CS.DashBoardOptions>

                  <Button variant="contained" color="secondary" size="small" onClick={this.removeAllCompletedTasks}>
                    Remover Tarefas Completas
                    <DeleteIcon />
                  </Button> <br />

                  </CS.DashBoardOptions>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Controle de Filtros</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <CS.DashBoardOptions>
                  <CS.DashBoardTitle>Mostrar:</CS.DashBoardTitle>
                  <Button variant="contained" color="primary" size="small" onClick={() => this.setFilter('all')}>
                    Todas as Tarefas
                    <AssignmentIcon />
                  </Button> <br />
                  <Button variant="contained" color="primary" size="small" onClick={() => this.setFilter('completed')}>
                    Tarefas Completas
                    <AssignmentTurnedInIcon />
                  </Button> <br />
                  <Button variant="contained" color="primary" size="small" onClick={() => this.setFilter('incomplete')}>
                    Tarefas Incompletas
                   <AssignmentLateIcon />
                  </Button> <br />
                </CS.DashBoardOptions>
              </ExpansionPanelDetails>
            </ExpansionPanel>

              <CS.CheckListContainer>
                <Button onClick={this.checkList} variant="outlined" size="small">
                  Checar Lista no Console
                </Button>
              </CS.CheckListContainer>

          </List>

        </CS.TaskListArea>

      </CS.AppMainDiv>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasklist.tasklistarray,
    filter: state.tasklist.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    callAddTaskToList: taskText => dispatch(addTaskToList(taskText)),
    callDeleteTaskFromList: id => dispatch(deleteTaskFromList(id)),
    callToggleTaskCompletion: id => dispatch(toggleTaskCompletion(id)),
    callRemoveAllCompletedTasks: () => dispatch(removeAllCompletedTasks()),
    callSetFilter: filter => dispatch(setFilter(filter)),
    callGetTasks: () => dispatch(getTasks()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
