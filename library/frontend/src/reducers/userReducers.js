import {
    USER_DETAILS_FAIL,
    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
    USER_SIGNOUT,
  } from '../constants/userConstants';
  /*reducers are like bridge to implement actions of the related requests
  first user actions work and there will be 3 values of the type of action
  reducers gets the type of action and define necessery variables
  to use in frontend */
  export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { loading: true };
      case USER_REGISTER_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_REGISTER_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  export const userSigninReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_SIGNIN_REQUEST:
        return { loading: true };
      case USER_SIGNIN_SUCCESS:
          //if success, userInfo object will be the info of user
        return { loading: false, userInfo: action.payload };
      case USER_SIGNIN_FAIL:
          //if fail, there will be error message
        return { loading: false, error: action.payload };
      case USER_SIGNOUT:
        return {};
      default:
        return state;
    }
  };

  //i will use the reducer in redux store

  export const userDetailsReducer = (state = { loading: true }, action) => {
    switch (action.type) {
      case USER_DETAILS_REQUEST:
        return { loading: true };
      case USER_DETAILS_SUCCESS:
        return { loading: false, user: action.payload };
      case USER_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
