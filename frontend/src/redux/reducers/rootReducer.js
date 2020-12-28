import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { pizzaReducer } from './pizzaReducer'
import {cartReducer} from './cartReducer'


export const rootReducer = combineReducers({
  user: userReducer,
  pizzas: pizzaReducer,
  cart: cartReducer,

})
