import { combineReducers } from 'redux';

import cartSlice from '../redux/slice';
import loginSlice from './loginUserSlice';

const rootReducer = combineReducers({
    cart : cartSlice ,
    login : loginSlice
    // add other reducers here
  });
  
  export default rootReducer;