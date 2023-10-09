import { ADD_STUDENT, SET_STUDENT_LIST, CHANGE_PAGE, SET_TOTAL_PAGE } from "./constants"

export const addStudent = (payload) => {
    return {
        type: ADD_STUDENT,
        payload: payload
    }
}

export const setStudentList = (payload) => {
    return {
        type: SET_STUDENT_LIST,
        payload: payload
    }
}

export const changePage = (payload) => {
    return {
        type: CHANGE_PAGE,
        payload: payload
    }
}

export const setTotalPage = (payload) => {
    return {
        type: SET_TOTAL_PAGE,
        payload: payload
    }
}