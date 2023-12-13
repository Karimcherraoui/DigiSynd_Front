import { combineReducers } from 'redux';
import apartmentReducer from './apartmentReducer';
import adminReducer from './adminReducer';




const rootReducer = combineReducers({
  aparts: apartmentReducer,
  admin : adminReducer

});

export default rootReducer;
