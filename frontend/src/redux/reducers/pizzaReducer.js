import { GET_PIZZAS } from '../actionTypes'

// const defaultState = {
//   currentUser: {},
//   isAuth: false,
// }

export function pizzaReducer(state = [], action) {
  switch (action.type) {

    case GET_PIZZAS:
      localStorage.setItem('pizzasLS', JSON.stringify(
        [...action.payload]
      ))
      return [...state, ...action.payload]
    default:
      return state
  }
}


