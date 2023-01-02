export const GET_CARS = 'GET_CARS';
export const SET_CARS = 'SET_CARS';

export const GET_CAR_FEATURES = 'GET_CAR_FEATURES';
export const SET_CAR_FEATURES = 'SET_CAR_FEATURES';

export const GET_CAR_INTERIOR = 'GET_CAR_INTERIOR';
export const SET_CAR_INTERIOR = 'SET_CAR_INTERIOR';

export const GET_CAR_EXTERIOR = 'GET_CAR_EXTERIOR';
export const SET_CAR_EXTERIOR = 'SET_CAR_EXTERIOR';

export const GET_CAR_AUTOPILOT = 'GET_CAR_AUTOPILOT';
export const SET_CAR_AUTOPILOT = 'SET_CAR_AUTOPILOT';

export const getCars = () => ({
  type: GET_CARS,
});

export const getCarFeatures = id => ({
  type: GET_CAR_FEATURES,
  id,
});

export const getCarInterior = id => ({
  type: GET_CAR_INTERIOR,
  id,
});

export const getCarExterior = id => ({
  type: GET_CAR_EXTERIOR,
  id,
});

export const getCarAutoPilot = id => ({
  type: GET_CAR_AUTOPILOT,
  id,
});

export const setCars = cars => ({
  type: SET_CARS,
  cars,
});

export const setCarFeatures = features => ({
  type: SET_CAR_FEATURES,
  features,
  requestInProgress: false,
});

export const setCarInterior = interior => ({
  type: SET_CAR_INTERIOR,
  interior,
});

export const setCarExterior = exterior => ({
  type: SET_CAR_EXTERIOR,
  exterior,
});

export const setCarAutoPilot = autopilot => ({
  type: SET_CAR_AUTOPILOT,
  autopilot,
  requestInProgress: false,
});

const initialState = {
  cars: undefined,
  features: undefined,
  exterior: undefined,
  interior: undefined,
  autopilot: undefined,
  requestInProgress: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CARS:
      const {cars} = action;
      return {...state, cars};
    case SET_CAR_FEATURES:
      const {features} = action;
      return {...state, features, requestInProgress: true};
    case SET_CAR_INTERIOR:
      const {interior} = action;
      return {...state, interior, requestInProgress: true};
    case SET_CAR_EXTERIOR:
      const {exterior} = action;
      return {...state, exterior, requestInProgress: true};
    case SET_CAR_AUTOPILOT:
      const {autopilot} = action;
      return {...state, autopilot, requestInProgress: true};

    default:
      return state;
  }
};
