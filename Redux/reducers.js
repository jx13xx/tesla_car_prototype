import {DECREMENT_STEP, INCREMENT_STEP} from './actionType';

const initialSate = {
  step: 0,
};

export const mainReducer = (state = initialSate, action) => {
  switch (action.type) {
    case INCREMENT_STEP:
      console.log(state.step, 'inside the reducers');
      return {...state, counter: state.step + 1};

    case DECREMENT_STEP:
      return {...state, counter: state.step - 1};

    default:
      return state;
  }
};
