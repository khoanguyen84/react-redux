import { SET_LOADING } from "../Actions/constants";

const initLoadingState = { 
    loading: false 
}
const loadingReducer = (state = initLoadingState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: action.payload
            }

        default:
            return new Error("Invalid Loading Action")
    }
}

export default loadingReducer;