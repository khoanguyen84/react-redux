import React from "react";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import AlertSuccesss from "../Layout/AlertSuccess";
import { useDispatch } from "react-redux";
import { setToggleAlert } from "../../Actions";

const schema = yup
    .object({
        name: yup.string().required(),
        age: yup.number().positive().integer().required().typeError('invalid age'),
        city: yup.string().required(),
        mark: yup.number().min(0).max(10).required().typeError('invalid mark')
    })
    .required()

const CreateStudent = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    })
    const dispatch = useDispatch();

    const handleCreateUser = async (data) => {
        console.log(data);
        dispatch(setToggleAlert(true))
        reset()
    }
    return (
        <>
            <AlertSuccesss message={"User created success"} />
            <div className="border p-3 rounded">
                <form onSubmit={handleSubmit(handleCreateUser)} className="row">
                    <div className="form-group col-md-6 mb-2">
                        <label className="form-lable mb-2">Name</label>
                        <input type="text" className={`${errors?.name?.message ? 'form-control is-invalid' : 'form-control'}`} {...register('name')} placeholder="Name" />
                        <span className="invalid-feedback">{errors?.name?.message}</span>
                    </div>
                    <div className="form-group col-md-6 mb-2">
                        <label className="form-lable mb-2">Age</label>
                        <input type="number" className={`${errors?.age?.message ? 'form-control is-invalid' : 'form-control'}`}  {...register('age')} placeholder="Age" />
                        <span className="invalid-feedback">{errors?.age?.message}</span>
                    </div>
                    <div className="form-group col-md-6 mb-2">
                        <label className="form-lable mb-2">City</label>
                        <input type="text" className={`${errors?.city?.message ? 'form-control is-invalid' : 'form-control'}`} {...register('city')} placeholder="City" />
                        <span className="invalid-feedback">{errors?.city?.message}</span>
                    </div>
                    <div className="form-group col-md-6 mb-2">
                        <label className="form-lable mb-2">Mark</label>
                        <input type="text" className={`${errors?.mark?.message ? 'form-control is-invalid' : 'form-control'}`} {...register('mark')} placeholder="Mark" />
                        <span className="invalid-feedback">{errors?.mark?.message}</span>
                    </div>
                    <div className="form-group col-md-6 mb-2">
                        <label className="form-lable mb-2">Gender</label>
                        <div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" checked='checked' value="male" {...register('gender')} />
                                <label className="form-check-label">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" value="female" {...register('gender')} />
                                <label className="form-check-label">Female</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-md-6 mb-2">
                        <label className="form-lable mb-2"></label>
                        <div className="d-flex">
                            <button type="submit" className="btn btn-sm btn-success flex-fill me-2">
                                <i className="fa fa-save me-2" />
                                Create
                            </button>
                            <button type="button" className="btn btn-sm btn-secondary flex-fill" onClick={() => reset()}>
                                <i className="fa fa-times me-2" />
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CreateStudent;