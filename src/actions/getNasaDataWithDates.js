import nasa from "../lib/nasa";

//Types
export const NASA_GET_REQUEST = "DIRECTORIES_GET_REQUEST";
export const NASA_GET_SUCCESS = "DIRECTORIES_GET_SUCCESS";
export const NASA_GET_FAILURE = "DIRECTORIES_GET_FAILURE";

//actions

const getNasaRequest = () => {
  return { type: NASA_GET_REQUEST };
};

const getNasaSuccess = (data) => {
  return { type: NASA_GET_SUCCESS, payload: data };
};

const getNasaFailure = () => {
  return { type: NASA_GET_FAILURE };
};

export const getNasaDateAction = (startDate, endDate) => (dispatch) => {
  dispatch(getNasaRequest());
  nasa
    .getNasaWithDate(startDate, endDate)
    .then((res) => {
      dispatch(getNasaSuccess(res));
    })
    .catch((e) => {
      dispatch(getNasaFailure());
    });
};
