const initialState = {
    tripsList: [],
    selectedTripID: null,
    tripDetails: null,
}

const trips = (state = initialState, action) =>{
    switch (action.type) {
        case 'SET_TRIPS':
            return {
                ...state,
                tripsList: action.payload.trips
            }

        case 'SET_TRIP_DETAILS':
            return {
                ...state,
                tripDetails: action.payload.tripDetails
            }
        case 'SET_TRIP_DETAILS_ID':
            return {
                ...state,
                selectedTripID: action.payload.tripID,
            }
    
        default:
            return state;
    }
}

export default trips;