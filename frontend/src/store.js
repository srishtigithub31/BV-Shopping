import {legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools} from "redux-devtools-extension";
import { newReviewReducer, productDetailsReducer, productReducer } from './reducers/productReducer';
import { profileReducer, userReducer } from "./reducers/userReducer";
import { cartReducer } from './reducers/cartReducer';
import { myOrdersReducer, newOrderReducer, orderDetailsReducer } from './reducers/orderReducer';


const reducer = combineReducers({
   products:productReducer,
   productDetails:productDetailsReducer,
   user: userReducer,
   profile: profileReducer,
   //forgotPassword
   cart: cartReducer, 
   newOrder: newOrderReducer,
   myOrders: myOrdersReducer,
   orderDetails: orderDetailsReducer,
   newReview:newReviewReducer,
});

let initialState={
  cart: {
    cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  shippingInfo: localStorage.getItem("shppingInfo")
    ? JSON.parse(localStorage.getItem("shippingInfo"))
    : {},
  },
};

const middleware = [thunk];

  const store = legacy_createStore (
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    );

    export default store;