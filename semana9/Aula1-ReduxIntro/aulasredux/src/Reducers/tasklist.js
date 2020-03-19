const initialState = {
  tasklist: 
  [
    {
        id: new Date().getTime(),
        completed: false,
        taskText: "Ola!"
    }
  ],

  filter: 'all',

}


const tasklist = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TASK_TO_LIST":{
        return [
            ...state.tasklist,
            {
                id: new Date().getTime(),
                completed: false,
                taskText: action.payload.taskText,
            }
        ]
      }
      case "DELETE_TASK_FROM_LIST":{
        return state.tasklist.filter(task =>
            task.id !== action.payload.id
        )
      }
      case "TOGGLE_TASK_COMPLETION":{
         const newState = state.tasklist.map(task => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              completed: !task.completed
            }
          }
          return task
        })
        return newState
      }
      case "REMOVE_ALL_COMPLETED_TASKS":{
        return state.tasklist.filter(task =>
          task.completed !== true
          )
      }
      case "COMPLETE_ALL_TASKS":{
        const newState = state.tasklist.map(task => {
          return {
            ...task,
            completed: true,
          }
        })
        return newState
      }
      case "SET_FILTER":{
        return{
          ...state,
          filter: action.payload.filter
        }
      }

      default:
        return state;
    }
  };


export default tasklist;