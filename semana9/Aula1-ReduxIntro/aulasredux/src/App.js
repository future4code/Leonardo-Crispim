import React from 'react';
import { connect } from "react-redux";
import styled from "styled-components";
import tasklist from './Reducers/tasklist';
import TaskList from './Components/TaskList';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    console.log(this.props.tasks)
    return (
      <TaskList />
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state.tasklist,
  };
};

export default connect(mapStateToProps)(App);
