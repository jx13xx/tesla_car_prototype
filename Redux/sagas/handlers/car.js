import {call, put} from 'redux-saga/effects';
import car, {
  getSelectedFeatureCost,
  setCarAutoPilot,
  setCarExterior,
  setCarFeatures,
  setCarInterior,
  setCars,
  setSelectedFeatureCost,
} from '../../ducks/car';
import {
  requestGetCarAutopilot,
  requestGetCarExterior,
  requestGetCarFeatures,
  requestGetCarInterior,
  requestGetCars,
} from '../requests/car';

export function* handleGetCars(action) {
  try {
    const response = yield call(requestGetCars);
    const {data} = response;
    yield put(setCars(data));
  } catch (error) {
    console.log(error);
  }
}

export function* handleGetCarFeatures(action) {
  try {
    const response = yield call(requestGetCarFeatures, action.id);
    const {data} = response;
    yield put(setCarFeatures(data));
  } catch (err) {
    console.log(err);
  }
}

export function* handleGetCarInteriors(action) {
  try {
    const response = yield call(requestGetCarInterior, action.id);
    const {data} = response;
    yield put(setCarInterior(data));
  } catch (err) {
    console.log(err);
  }
}

export function* handleGetCarExterior(action) {
  try {
    const response = yield call(requestGetCarExterior, action.id);
    const {data} = response;
    yield put(setCarExterior(data));
  } catch (err) {
    console.log(err);
  }
}

export function* handleGetCarAutoPilot(action) {
  try {
    const response = yield call(requestGetCarAutopilot, action.id);
    const {data} = response;
    yield put(setCarAutoPilot(data));
  } catch (err) {
    console.log(err);
  }
}
