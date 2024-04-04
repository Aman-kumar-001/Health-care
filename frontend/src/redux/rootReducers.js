import { combineReducers } from 'redux';

import cartSlice from '../redux/slice';

const rootReducer = combineReducers({
    cart : cartSlice 
    // add other reducers here
  });
  
  export default rootReducer;