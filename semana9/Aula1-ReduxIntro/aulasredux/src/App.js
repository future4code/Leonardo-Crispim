import React from 'react';
import { connect } from "react-redux";
import TaskList from './Components/TaskList';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
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
