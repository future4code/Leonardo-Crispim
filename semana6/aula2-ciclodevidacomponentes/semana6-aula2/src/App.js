import React from 'react';
import './App.css';
import styled from 'styled-components'

const MainDiv = styled.div`
  text-align: center;
  justify-content: center;
  margin: auto;
`

const StyledUl = styled.ul`
  list-style-position: inside;
`

const StyledLi = styled.li`
 text-decoration: ${props => props.completed ? "line-through" : "none"};
`

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      usertasktext: "",
      tasks: [],
    }
  }

  saveTaskText = (event) => {
    const userInput = event.target.value

    this.setState({
      usertasktext: userInput
    })
  }

  addTask = () => {
    const newTaskItem = this.state.usertasktext
    const updatedTasks = [
      ...this.state.tasks,
      {
       name: newTaskItem,
       completed: false,
      }
    ]

    this.setState({
      tasks: updatedTasks,
      usertasktext: ""
    })
  }

  completeTask = (name) => () => {
    const updatedTasks = this.state.tasks.map((task) => {
      if (task.name === name) {
        return {
          ...task,
          completed: !task.completed
        }
      }

      return task;
    });
    
    this.setState({ tasks: updatedTasks });
  }

  render(){
    return (
      <MainDiv>
        <h1>Lista de tarefas</h1>
  
        <input id="InputFieldID" type="text" onChange={this.saveTaskText} value={this.state.usertasktext}></input> <button id="AddTaskButtonID" onClick={this.addTask}>Adicionar</button> <br />
  
        <div id="FilterDivID">
  
          <span id="FilterTextID">Filtro</span>
  
          <select id="FilterSelectID">
            <option value="None">Nenhum</option>
            <option value="Ongoing">Pendentes</option>
            <option value="Completed">Completas</option>
          </select>
  
        </div>
  
        <div id="TaskListDivID">
          <StyledUl id="TaskListID">
            {
              this.state.tasks.map(task => {
                return(<StyledLi 
                  onClick={this.completeTask(task.name)} 
                  completed={task.completed}
                >
                  {task.name}
                </StyledLi>
                )}
                )
            }
          </StyledUl>
        </div>
  
      </MainDiv>
    );
  }
}

export default App;
