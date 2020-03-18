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
import Fab from "@material-ui/core/Fab";

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

  deleteTask = () =>{
    
  }

  render() {
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
            {this.props.tasks.map(task => (
              <ListItem key={task.id} button>
                <ListItemText primary={task.taskText} />
                <ListItemSecondaryAction>
                  <Checkbox color="primary" />
                  <Fab color="secondary" aria-label="Add" size="small" onClick={this.testFunction}>
                    X
                  </Fab>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>

        </CS.TaskListArea>

      </CS.AppMainDiv>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasklist,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    callAddTaskToList: taskText => dispatch(addTaskToList(taskText)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
