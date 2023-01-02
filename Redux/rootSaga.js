import {takeLatest, all, put} from 'redux-saga/effects';
import {
  handleGetCarAutoPilot,
  handleGetCarExterior,
  handleGetCarFeatures,
  handleGetCarInteriors,
  handleGetCars,
} from './sagas/handlers/car';
import {
  GET_CAR_AUTOPILOT,
  GET_CAR_EXTERIOR,
  GET_CAR_FEATURES,
  GET_CAR_INTERIOR,
  GET_CARS,
} from './ducks/car';

export function* watcherSaga() {
  yield takeLatest(GET_CARS, handleGetCars);
  yield takeLatest(GET_CAR_FEATURES, handleGetCarFeatures);
  yield takeLatest(GET_CAR_EXTERIOR, handleGetCarExterior);
  yield takeLatest(GET_CAR_INTERIOR, handleGetCarInteriors);
  yield takeLatest(GET_CAR_AUTOPILOT, handleGetCarAutoPilot);
}
