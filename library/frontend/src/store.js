import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { bookListReducer } from './reducers/bookReducers';
import { userDetailsReducer, userRegisterReducer, userSigninReducer, } from './reducers/userReducers';

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
  },
};

const reducer = combineReducers({
  bookList:bookListReducer,
  userSignin:userSigninReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
