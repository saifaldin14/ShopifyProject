import { put } from "@redux-saga/core/effects";

import { getNasaAction } from "../actions/getNasaData";

function* getNasaDataSaga() {
  yield put(getNasaAction());
}

export default getNasaDataSaga;
