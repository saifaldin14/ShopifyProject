import nasa from "../lib/nasa";

//Types
export const NASA_GET_REQUEST = "DIRECTORIES_GET_REQUEST";
export const NASA_GET_SUCCESS = "DIRECTORIES_GET_SUCCESS";
export const NASA_GET_FAILURE = "DIRECTORIES_GET_FAILURE";

//Actions
const getNasaRequest = () => {
  return { type: NASA_GET_REQUEST };
};

const getNasaSuccess = (data) => {
  return { type: NASA_GET_SUCCESS, payload: data };
};

const getNasaFailure = () => {
  return { type: NASA_GET_FAILURE };
};

export const getNasaAction = () => (dispatch) => {
  //Dispatch the request action (isLoading will be true)
  dispatch(getNasaRequest());
  //Fetch the data
  nasa
    .getNasa()
    .then((res) => {
      //Once the data is successfully retrieved execute the success action
      dispatch(getNasaSuccess(res));
    })
    .catch((e) => {
      //Failure and execute failure action
      console.log(e);
      dispatch(getNasaFailure());
    });
  //In both success or failure isLoading will be false
};
