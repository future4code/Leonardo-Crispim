import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Lista de tarefas</h1>

      <input id="InputFieldID" type="text"></input> <button id="AddTaskButtonID">Adicionar</button> <br />

      <div id="FilterDivID">

        <span id="FilterTextID">Filtro</span>

        <select id="FilterSelectID">
          <option value="None">Nenhum</option>
          <option value="Ongoing">Pendentes</option>
          <option value="Completed">Completas</option>
        </select>

      </div>

      <div id="TaskListDivID">
        <ul id="TaskListID">

        </ul>
      </div>

    </div>
  );
}

export default App;
