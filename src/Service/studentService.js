import axios from "axios";

class StudentService{
    static getStudents(_page){
        return axios.get(`https://js-post-api.herokuapp.com/api/students?_page=${_page}`)
    }

    static getStudent(id){
        return axios.get(`https://js-post-api.herokuapp.com/api/students/${id}`)
    }
}

export default StudentService;