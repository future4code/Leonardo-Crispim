const initialState = {
  tasklistarray: 
  [
    {
        id: new Date().getTime(),
        completed: false,
        text: "Ola!"
    }
  ],

  filter: 'all',

}


const tasklist = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TASK_TO_LIST":
        return {
            ...state,
            tasklistarray: [...state.tasklistarray,
                {
                    id: new Date().getTime(),
                    completed: false,
                    taskText: action.payload.taskText,
                }
            ]
      }
      case "SET_TASKS":
        return {
          ...state,
          tasklistarray: [...state.tasklistarray,
          ...action.payload.tasks
        ]
        }
      //-----
      case "DELETE_TASK_FROM_LIST":{
        const newState = state.tasklistarray.filter(task =>
          task.id !== action.payload.id)
          return{
            ...state,
            tasklistarray : newState
          }
      }
      case "TOGGLE_TASK_COMPLETION":{
         const newState = state.tasklistarray.map(task => {
          if (task.id === action.payload.id) {
            return {
              ...task,
              completed: !task.completed
            }
          }
          return task
        })
        return {
          ...state,
          tasklistarray: newState
        }
      }
      case "REMOVE_ALL_COMPLETED_TASKS":{
        const newState = state.tasklistarray.filter(task =>
          task.completed !== true
          )
        return {
          ...state,
          tasklistarray: newState
        }
      }
      case "REMOVE_ALL_INCOMPLETE_TASKS":{
        const newState = state.tasklistarray.filter(task =>
          task.completed !== false
          )
        return {
          ...state,
          tasklistarray: newState
        }
      }
      case "COMPLETE_ALL_TASKS":{
        const newState = state.tasklistarray.map(task => {
          return {
            ...task,
            completed: true,
          }
        })
        return{
          ...state,
          tasklistarray: newState
        } 
      }
      case "INCOMPLETE_ALL_TASKS":{
        const newState = state.tasklistarray.map(task => {
          return {
            ...task,
            completed: false,
          }
        })
        return{
          ...state,
          tasklistarray: newState
        } 
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