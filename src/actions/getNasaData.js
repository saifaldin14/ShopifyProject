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

export const getNasaAction = () => (dispatch) => {
  dispatch(getNasaRequest());
  nasa
    .getNasa()
    .then((res) => {
      const nasaObject = {
        description: res.data.explanation,
        title: res.data.title,
        date: res.data.date,
        url: res.data.url,
      };

      alert(nasaObject.title);
      dispatch(getNasaSuccess(nasaObject));
    })
    .catch((e) => {
      dispatch(getNasaFailure());
    });
};
