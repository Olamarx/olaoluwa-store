import axios from 'axios';
import { INDIVIDUAL_PRODUCT_REQUEST, INDIVIDUAL_PRODUCT_SUCCESS, INDIVIDUAL_PRODUCT_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from "../types";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })

    const { data } = await axios.get('/api/products')
    
    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.response && error.response.data.message ?
      error.response.data.message
      :error.message })
  }
}

export const indProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: INDIVIDUAL_PRODUCT_REQUEST })

    const { data } = await axios.get(`/api/products/${id}`)
    
    dispatch({ type: INDIVIDUAL_PRODUCT_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: INDIVIDUAL_PRODUCT_FAIL, payload: error.response && error.response.data.message ?
      error.response.data.message
      :error.message })
  }
}