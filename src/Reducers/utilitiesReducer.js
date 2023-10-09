import { SET_LOADING , VISIBLE_CREATE_USER, TOGGLE_ALERT } from "../Actions/constants";

const initLoadingState = {
    loading: false,
    visibleCreateUser: false,
    toggleAlert: false
}
const utilitiesReducer = (state = initLoadingState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }
        case VISIBLE_CREATE_USER: {
            return {
                ...state,
                visibleCreateUser: action.payload
            }
        }
        case TOGGLE_ALERT: {
            return {
                ...state,
                toggleAlert: action.payload
            }
        }
        default:
            return state
    }
}

export default utilitiesReducer;