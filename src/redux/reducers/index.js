import { combineReducers } from 'redux';
import apartmentReducer from './apartmentReducer';
import userReducer from './userReducer';




const rootReducer = combineReducers({
  apparts: apartmentReducer,
  user : userReducer

});

export default rootReducer;
