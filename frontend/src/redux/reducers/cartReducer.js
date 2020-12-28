import { ADD_TO_CART, DEL_FROM_CART, CLEAR_CART } from '../actionTypes'

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,

}

export function cartReducer(state = initialState, action) {
  switch (action.type) {

    case ADD_TO_CART: {
      const newItems = {
        ...state.items,
        [action.payload._id]: !state.items[action.payload._id]
          ? [action.payload]
          : [...state.items[action.payload._id], action.payload],
      };

      const allPizzas = [].concat.apply([], Object.values(newItems));
      const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0)
      const cart = {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice,
      }
      localStorage.setItem('cartLS', JSON.stringify(cart))
      return cart
    }
    case DEL_FROM_CART:
      // const idd = action.payload._id
      // const arr = state.items[action.payload._id]
      // arr.pop()
      // console.log('arr', arr);
      // console.log('state', state)
      // console.log('localStorage', JSON.parse(localStorage.getItem('cartLS')))

      const newItems = {
        ...state,
        ...(state.items[action.payload._id].pop())

      }

      const cart = {

        items: newItems,
        totalCount: state.totalCount - 1,
        totalPrice: state.totalPrice - action.payload.price
      }
      localStorage.setItem('cartLS', JSON.stringify(cart))
      return cart





    case CLEAR_CART:
      localStorage.setItem('cartLS', JSON.stringify(initialState))
      return initialState

    default:
      return state
  }
}
