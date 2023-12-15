import * as actionTypes from "../actions/actionsType";

const initialState = {
  admin: null,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        admin: action.payload,
      };
      case actionTypes.LOGOUT:
      return {
        ...state,
        admin: null,
      
      };

    default:
      return state;
  }
};

export default adminReducer;
