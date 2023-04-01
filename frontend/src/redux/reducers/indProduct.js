import { INDIVIDUAL_PRODUCT_REQUEST, INDIVIDUAL_PRODUCT_SUCCESS, INDIVIDUAL_PRODUCT_FAIL } from "../types";

export const indProductReducer = (state = { product: { reviews: [] } }, action) => {
  switch (action.type) {
    case INDIVIDUAL_PRODUCT_REQUEST:
      return { loading: true, ...state }
    case INDIVIDUAL_PRODUCT_SUCCESS:
      return { loading: false, product: action.payload }
    case INDIVIDUAL_PRODUCT_FAIL:
      return { loading: false, error: action.payload }
  
    default:
      return state;
  }
}
