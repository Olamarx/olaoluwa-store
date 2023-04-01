import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer } from './reducers/productReducer';
import { indProductReducer } from './reducers/indProduct';
const reducer = combineReducers({
  productList: productListReducer,
  product: indProductReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
