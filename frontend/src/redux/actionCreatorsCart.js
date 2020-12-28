import { ADD_TO_CART, DEL_FROM_CART, CLEAR_CART } from './actionTypes'



// export const fetchGetPizzasAC = (payload) => {
//   return (dispatch) => {
//     fetch('/getpizzas')
//       .then(res => res.json())
//       .then(pizzas => dispatch(getPizzasAC(pizzas)))
//   }
// };


export const addToCartAC = (payload) => ({
  type: ADD_TO_CART,
  payload
});

export const delFromCartAC = (payload) => ({
  type: DEL_FROM_CART,
  payload
});

export const clearCartAC = (payload) => ({
  type: CLEAR_CART,
});

