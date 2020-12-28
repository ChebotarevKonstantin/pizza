import { GET_PIZZAS } from './actionTypes'



export const fetchGetPizzasAC = (payload) => {
  return (dispatch) => {
    fetch('/getpizzas')
      .then(res => res.json())
      .then(pizzas => dispatch(getPizzasAC(pizzas)))
  }
};


export const getPizzasAC = (payload) => ({
  type: GET_PIZZAS,
  payload
});

