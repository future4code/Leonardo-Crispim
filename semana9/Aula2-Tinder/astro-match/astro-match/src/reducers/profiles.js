const initialState = {
  profileToSwipe: undefined,
  matches: [],
}

const profiles = (state = initialState, action) => {
  switch (action.type){
    case "STORE_PROFILE":{
      return{
        ...state,
        profileToSwipe: action.payload.profileToSwipe
      }
    }
    case 'STORE_MATCHES':{
      return{
        ...state,
        matches: action.payload.matches
      }
    }
  }
  return state
}

export default profiles
