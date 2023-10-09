import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setToggleAlert } from "../../Actions";

const AlertSuccesss = ({ message }) => {
    const utilitiesState = useSelector((state) => state.utilitiesReducer)
    const dispatch = useDispatch();
    return (
        <>
            {
                utilitiesState.toggleAlert && (
                    <div className="alert alert-success">
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center">
                                <i className="fa fa-check-circle fs-3 me-2" />
                                <h5 className="alert-heading">Well done!</h5>
                            </div>
                            <span role="button" className="fw-bolder fs-3" onClick={() => dispatch(setToggleAlert(false))}>&times;</span>
                        </div>
                        <hr />
                        <p>{message}</p>
                    </div>)
            }
        </>
    )
}

export default AlertSuccesss;