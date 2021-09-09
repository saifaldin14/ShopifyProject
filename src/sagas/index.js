import { all } from "@redux-saga/core/effects";

import getNasaDataSaga from "./getNasaDataSaga";

function* rootSaga() {
  yield all([getNasaDataSaga()]);
}

export default rootSaga;
