import {
  NASA_GET_REQUEST,
  NASA_GET_SUCCESS,
  NASA_GET_FAILURE,
} from "../actions/getNasaData";

//Define the initial state
const INITIAL_STATE = {
  isLoading: false,
  data: [],
};

//Reducer to update the store
const getNasaData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NASA_GET_REQUEST:
      return { ...state, isLoading: true };
    case NASA_GET_SUCCESS:
      return { ...state, data: action.payload, isLoading: false };
    case NASA_GET_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default getNasaData;
