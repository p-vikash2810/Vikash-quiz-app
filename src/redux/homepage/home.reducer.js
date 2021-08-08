const { homeActionTypes } = require("./home.type");

const homeValues = {
  totalQuestion: 20,
  lowerLimit: 1,
  upperLimit: 10,
};

const initialState = {
  homeValues,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case homeActionTypes.SET_HOME_VALUES:
      return {
        ...state,
        homeValues: action.payload,
      };

    default:
      return state;
  }
};

export default homeReducer;
