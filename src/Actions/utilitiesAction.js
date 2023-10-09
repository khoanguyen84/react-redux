import { SET_LOADING, TOGGLE_ALERT, VISIBLE_CREATE_USER } from "./constants"

export const setLoading = (payload) => {
    return {
        type: SET_LOADING,
        payload: payload
    }
}

export const setVisible = (payload) => {
    return {
        type : VISIBLE_CREATE_USER,
        payload: payload
    }
}

export const setToggleAlert = (payload) => {
    return {
        type : TOGGLE_ALERT,
        payload: payload
    }
}