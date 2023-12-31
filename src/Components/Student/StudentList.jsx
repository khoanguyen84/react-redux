import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StudentService from "../../Service/studentService";
import { changePage, setStudentList, setTotalPage, setLoading, setVisible } from "../../Actions";
import { Link } from "react-router-dom";
import Spinner from "../Layout/Spinner";
import CreateStudent from "./CreateStudent";
import { FaPlus } from 'react-icons/fa';

const StudentList = () => {
    const stateInStore = useSelector((state) => state)
    // console.log(stateInStore);
    const { studentList, currentPage, totalPage, direction} = stateInStore.studentReducer
    const { loading, visibleCreateUser } = stateInStore.utilitiesReducer;
    const dispatch = useDispatch();
    useEffect(() => {
        try {
            dispatch(setLoading(true))
            async function fetchData() {
                let studentRes = await StudentService.getStudents(currentPage);
                dispatch(setStudentList(studentRes?.data?.data))
                dispatch(setTotalPage(Math.ceil(Number(studentRes?.data?.pagination?._totalRows) / Number(studentRes?.data?.pagination?._limit))))
                dispatch(setLoading(false))
            }

            fetchData();
        } catch (error) {

        }
    }, [currentPage])

    return (
        <div className="container">
            <section>
                <div className="d-flex align-items-center">
                    <h3 className="text-success me-3">Student List</h3>
                    <button className="btn btn-sm btn-outline-success d-flex align-items-center" onClick={() => dispatch(setVisible(!visibleCreateUser))}>
                        {/* <i className="fa fa-plus me-2" /> */}
                        <FaPlus size={15} className="me-2" />
                        Add Student
                    </button>
                </div>
                <p className="fst-italic">Deserunt ut pariatur tempor aute incididunt Lorem esse. Pariatur dolore aute esse eu pariatur voluptate in amet excepteur occaecat culpa eiusmod. Non qui labore anim do dolore magna deserunt amet commodo Lorem aliquip.</p>
                {visibleCreateUser && <CreateStudent />}
            </section>
            <section className="mt-2">
                {
                    loading ? <Spinner /> : (
                        <div>
                            <nav className="navigation">
                                <ul className="pagination">
                                    <li className={`${currentPage <= 1 ? 'page-item disabled' : 'page-item'} ${direction == 'first' ? 'active' : ''}`}>
                                        <a role="button" className="page-link"
                                            onClick={() => dispatch(changePage('first'))}
                                        >First</a>
                                    </li>
                                    <li className={`${currentPage <= 1 ? 'page-item disabled' : 'page-item'} ${direction == 'prev' ? 'active' : ''}`}>
                                        <a role="button" className="page-link"
                                            onClick={() => dispatch(changePage('prev'))}
                                        >Previous</a>
                                    </li>
                                    <li className={`${currentPage >= totalPage ? 'page-item disabled' : 'page-item'} ${direction == 'next' ? 'active' : ''}`}>
                                        <a role="button" className="page-link"
                                            onClick={() => dispatch(changePage('next'))}
                                        >Next</a>
                                    </li>
                                    <li className={`${currentPage >= totalPage ? 'page-item disabled' : 'page-item'} ${direction == 'last' ? 'active' : ''}`}>
                                        <a role="button" className="page-link"
                                            onClick={() => dispatch(changePage('last'))}
                                        >Last</a>
                                    </li>
                                </ul>
                            </nav>
                            <table className="table table-striped table-hover">
                                <thead className="table-warning">
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Gender</th>
                                        <th>City</th>
                                        <th>Mark</th>
                                        <th>Actionts</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        studentList?.map((std) => (
                                            <tr key={std.id}>
                                                <td>{std.id}</td>
                                                <td>{std.name}</td>
                                                <td>{std.age}</td>
                                                <td>{std.gender}</td>
                                                <td>{std.city}</td>
                                                <td>{std.mark}</td>
                                                <td>
                                                    <Link to={`/student/detail/${std.id}`}>Detail</Link>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    )
                }
            </section>
        </div>
    )
}

export default StudentList;