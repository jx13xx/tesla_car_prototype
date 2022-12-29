import {DECREMENT_STEP, INCREMENT_STEP} from './actionType';

export const incrementStepCounter = () => {
  return {
    type: INCREMENT_STEP,
  };
};

export const decrementStepCounter = () => {
  return {
    type: DECREMENT_STEP,
  };
};
