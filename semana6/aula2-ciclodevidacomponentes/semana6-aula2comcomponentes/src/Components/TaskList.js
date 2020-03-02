import React from "react";
import styled from 'styled-components'

const StyledLi = styled.li`
`

const StyledTask = styled.span`
 text-decoration: ${props => props.completed ? "line-through" : "none"};
 user-select: none;
 margin-right: 10px;
`

const StyledUl = styled.ul`
  list-style-position: inside;
`

const StyledButton = styled.button`
margin-left: 10px;
`

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentfilter: "none",
      namefilter: "",
    };
  }

  componentDidMount(){
    const taskfilterString = localStorage.getItem("taskfilter")

    const savedtaskfilter = JSON.parse(taskfilterString)

    this.setState({
      currentfilter: savedtaskfilter
    })
  }

  componentDidUpdate(){
    localStorage.setItem("taskfilter", JSON.stringify(this.state.currentfilter))
  }

  mainListRender = () => {
    if(this.state.currentfilter === "incomplete"){
      return (this.filterList(false))
    }

    else if(this.state.currentfilter === "completed"){
      return (this.filterList(true))
    }

    else{
      return(this.filterListByName())
    }
  }

  onChangeFilter = (event) => {
    const newFilter = event.target.value;

    this.setState({
      currentfilter: newFilter
    })
  }

  filterList = (status) => {
    const filteredList = this.props.tasks.filter((task) =>{
      return task.completed == status && task.name.match(this.state.namefilter);
    }).map( (task) => {
      return(
        <StyledLi>
        <StyledTask onClick={this.props.completeTask(task.id)} completed={task.completed}>{task.name}</StyledTask>
        <button onClick={this.props.deleteTask(task.id)}>Deletar Tarefa</button>
        <StyledButton onClick={this.props.editTask(task.id)}>Editar Tarefa</StyledButton>
        </StyledLi>
      )
    });
    return filteredList
  }

  filterListByName =() => {
    const nameFilteredList = this.props.tasks.filter((task) =>{
      const regExp = new RegExp(this.state.namefilter, "i");
      return task.name.match(regExp);
    }).map( (task) => {
      return(
        <StyledLi>
        <StyledTask onClick={this.props.completeTask(task.id)} completed={task.completed}>{task.name}</StyledTask>
        <button onClick={this.props.deleteTask(task.id)}>Deletar Tarefa</button>
        <StyledButton onClick={this.props.editTask(task.id)}>Editar Tarefa</StyledButton>
        </StyledLi>
      )
    });
    return nameFilteredList
  }

  handleNameFilterOnChange = (event) =>{
    const newNameFilter = event.target.value

    this.setState({
      namefilter: newNameFilter
    })
  }

  render() {
    return (
      <div>
          <div id="FilterDivID">
            <span id="FilterTextID">Filtro</span>

            <select id="FilterSelectID" onChange={this.onChangeFilter} value={this.state.currentfilter}>
              <option value="none">Nenhum</option>
              <option value="incomplete">Incompletas</option>
              <option value="completed">Completas</option>
            </select>
          </div>

          <div id="TaskListDivID">
            <StyledUl id="TaskListID">
              {this.mainListRender()}
            </StyledUl>
            <br>
            </br>
            <button onClick={this.props.deleteList}>Apagar Lista</button>
            <br></br>
            <br></br>
            <span>Filtrar por Nome: </span>
            <input onChange={this.handleNameFilterOnChange} type="text"></input>
          </div>
      </div>
    );
  }
}

export default TaskList;
