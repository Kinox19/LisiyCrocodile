import { combineReducers } from "redux"
import products from '../../Products'

const defaultState = {
    selectProduct: null,
    products: products,
    cart: []
};

const productReducer = (state = defaultState, action) => {
    switch (action.type) {
      case 'SELECT_PRODUCT':
        return {
          ...state,
          selectedProduct: action.payload
        };
      case 'ADD_TO_CART':
        return {
          ...state,
          cart: [...state.cart, action.payload]
        };
      case 'SELECT_SIZE':
        return {
          ...state,
          selectedSize: action.payload
        };
      case 'SELECT_COLOR':
        return {
          ...state,
          selectedColor: action.payload
        };
      default:
        return state;
    }
  };

  const rootReducer = combineReducers({
    products: productReducer
  });

  export default rootReducer;