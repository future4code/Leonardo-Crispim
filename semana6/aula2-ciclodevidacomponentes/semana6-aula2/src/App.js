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
      currentfilter: "none"
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
        id: Date.now(),
       name: newTaskItem,
       completed: false,
      }
    ]

    this.setState({
      tasks: updatedTasks,
      usertasktext: ""
    })

    localStorage.setItem("tasklist", JSON.stringify(this.state.tasks))

  }

  completeTask = (id) => () => {
    const updatedTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        }
      }

      return task;
    });
    
    this.setState({ tasks: updatedTasks });

    localStorage.setItem("tasklist", JSON.stringify(updatedTasks))
  }

  mainListRender = () => {
    if(this.state.currentfilter === "incomplete"){
      return (this.filterListIncomplete())
    }

    else if(this.state.currentfilter === "completed"){
      return (this.filterListComplete())
    }

    else{
      return(
        this.state.tasks.map(task => {
          return(
            <StyledLi onClick={this.completeTask(task.id)} completed={task.completed}>
            {task.name}
            </StyledLi>
          )
        })
      )
    }
  }

  filterListIncomplete = () => {
    const filteredList = this.state.tasks.filter((task) =>{
      return task.completed === false;
    }).map( (task, index) => {
      return(
        <StyledLi onClick={this.completeTask(task.id)} completed={task.completed} key={index}>
          {task.name}
        </StyledLi>
      );
    });
    return filteredList
  }

  filterListComplete = () => {
    const filteredList = this.state.tasks.filter((task) =>{
      return task.completed === true;
    }).map( (task, index) => {
      return(
        <StyledLi onClick={this.completeTask(task.id)} completed={task.completed} key={index}>
         {task.name}
        </StyledLi>
      );
    })
    return filteredList
  }

  onChangeFilter = (event) => {
    const newFilter = event.target.value;

    this.setState({
      currentfilter: newFilter
    })
  }

  loadData = () => {
    const tasklistString = localStorage.getItem("tasklist")

    const savedtasklist = JSON.parse(tasklistString)

    this.setState({
      tasks: savedtasklist
    })
  }

  render(){
    return (
      <MainDiv>
        <h1>Lista de tarefas</h1>
  
        <input id="InputFieldID" type="text" onChange={this.saveTaskText} value={this.state.usertasktext}></input> <button id="AddTaskButtonID" onClick={this.addTask}>Adicionar</button> <button onClick={this.loadData}>Carregar Dados</button> <br />
  
        <div id="FilterDivID">
  
          <span id="FilterTextID">Filtro</span>
  
          <select id="FilterSelectID" onChange={this.onChangeFilter}>
            <option value="none">Nenhum</option>
            <option value="incomplete">Incompletas</option>
            <option value="completed">Completas</option>
          </select>
  
        </div>
  
        <div id="TaskListDivID">
          <StyledUl id="TaskListID">
            {this.mainListRender()}
          </StyledUl>
        </div>
  
      </MainDiv>
    );
  }
}

export default App;
