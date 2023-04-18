import { USER_LOGIN_FAILED, USER_LOGIN_SUCCESS, USER_LOGIN_REQUEST, USER_LOGOUT } from "../types";

export const userLoginReducer = (state = { }, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }
    case USER_LOGIN_SUCCESS:
      return { loading: false, products: action.payload }
    case USER_LOGIN_FAILED:
      return { loading: false, error: action.payload }
    case USER_LOGOUT:
      return { }
  
    default:
      return state;
  }
}
