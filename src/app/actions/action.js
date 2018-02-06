import * as types from '../constant'

export const getDataSuccess = (data) => ({ type: types.GET_DATA_SUCCESS, data })
export const getDataFailure = (message) => ({ type: types.GET_DATA_FAILURE, message })
export const getDataRequest = () => ({ type: types.GET_DATA_REQUEST })
export const submitDataRequest = (data) => ({type: types.SUBMIT_DATA_REQUEST, data})
export const submitDataFailure = (message) => ({ type: types.SUBMIT_DATA_FAILURE, message })
export const submitDataSuccesst = () => ({ type: types.SUBMIT_DATA_SUCCESS })
export const closeModal = () => ({ type: types.CLOSE_MODAL })