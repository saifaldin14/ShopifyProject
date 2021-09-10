import { put } from "@redux-saga/core/effects";

import { getNasaAction } from "../actions/getNasaData";

//Automatically call the API when the website loads
function* getNasaDataSaga() {
  yield put(getNasaAction());
}

export default getNasaDataSaga;
