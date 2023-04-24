import { combineReducers } from "redux"
import products from '../../Products'

const defaultState = {
    selectProduct: null,
    products: products,
    selectQuantity: null,
    selectImage: null,
    selectColor: null,
    selectSize: null,
    cart: []
};

const productReducer = (state = defaultState, action, payload) => {
    switch (action.type) {
      case 'SELECT_PRODUCT':
        return {
          ...state,
          selectedProduct: action.payload
        };
        case 'DELETE_ITEM':
          const updatedCart = state.cart.filter((item) =>
            item.id !== action.payload.id ||
            item.size !== action.payload.size ||
            item.color !== action.payload.color
          );
          localStorage.setItem("cart", JSON.stringify(updatedCart));
          return {
            ...state,
            cart: updatedCart,
          };
        case 'SELECT_IMAGE':
          return {
            ...state,
            selectedImage: action.payload
          };
      case 'SELECT_QUANTITY':
        return{
          ...state,
          selectedQuantity: action.payload
        };
        case 'ADD_TO_CART':
          const newState = {
            ...state,
            cart: [...state.cart, action.payload],
          };
          localStorage.setItem("cart", JSON.stringify(newState.cart));
          return newState;
        case 'LOAD_CART':
          return {
            ...state,
            cart: action.payload,
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