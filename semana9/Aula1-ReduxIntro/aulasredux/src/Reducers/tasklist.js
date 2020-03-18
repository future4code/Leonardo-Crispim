const initialState = [
    {
        id: new Date().getTime(),
        completed: false,
        taskText: "Ola!"
    }
]

const tasklist = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_TASK_TO_LIST":{
        return [
            ...state,
            {
                id: new Date().getTime(),
                completed: false,
                taskText: action.payload.taskText,
            }
        ]
      }
      case "DELETE_TASK_FROM_LIST":{
        return state.filter(task =>
            task.id !== action.payload.id
        )
      }

      default:
        return state;
    }
  };


export default tasklist;