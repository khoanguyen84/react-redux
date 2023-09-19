import { CHANGE_PAGE, SET_LOADING, SET_STUDENT_LIST, SET_TOTAL_PAGE } from "../Actions/constants";

const initStudentState = {
    studentList: [],
    student: {},
    currentPage: 1,
    loading: false,
    totalPage: 1,
    direction: ''
}

const studentReducer = (state = initStudentState, action) => {
    switch (action.type) {
        case SET_STUDENT_LIST: {
            
            return {
                ...state,
                studentList: action.payload
            }
        }
        case CHANGE_PAGE: {
            let _page = state.currentPage;
            switch(action.payload){
                case 'first': {
                    _page = 1;
                    break;
                }
                case 'prev': {
                    if(state.currentPage > 1){
                        _page = _page - 1;
                    }
                    break;
                }
                case 'next': {
                    if(state.currentPage < state.totalPage){
                        _page = _page + 1;
                    }
                    break;
                }
                case 'last': {
                    _page = state.totalPage;
                    break;
                }
            }
            
            return {
                ...state,
                currentPage: _page,
                direction: action.payload
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                loading: action.payload
            }
        }
        case SET_TOTAL_PAGE: {
            return {
                ...state,
                totalPage: action.payload
            }
        }
        default: {
            return state
        }

    }
}

export default studentReducer;