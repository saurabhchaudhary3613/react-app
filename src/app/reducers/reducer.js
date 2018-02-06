import * as actionTypes from '../constant'

export const mainReducer = (state = {quiz: [], isModalOpen: false}, action) => {
    switch (action.type) {

        case actionTypes.GET_DATA_REQUEST:
            return Object.assign({}, state, {
            }
            )

        case actionTypes.GET_DATA_SUCCESS:
            return Object.assign({}, state, {
                quiz: action.data,
            }
            )

        case actionTypes.GET_DATA_FAILURE:
            return Object.assign({}, state, {
                errorMessage: action.message,
            })
        
        case actionTypes.SUBMIT_DATA:
            return Object.assign({}, state, {
            })

        case actionTypes.SUBMIT_DATA_SUCCESS:
            return Object.assign({}, state, {
                isModalOpen: true
            }
            )
        
        case actionTypes.SUBMIT_DATA_FAILURE:
            return Object.assign({}, state, {
                isModalOpen: true
            })
            
        case actionTypes.CLOSE_MODAL:
            return Object.assign({}, state, {
                isModalOpen: false
            })

        default:
            return state;
    }
}
