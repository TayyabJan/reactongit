import { Formik, replace } from 'formik'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import 'react-notifications/lib/notifications.css'
import { NotificationManager } from 'react-notifications'
import { useNavigate } from 'react-router-dom';


const FormikLogin = () => {
    const navigation = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""

        },
        onSubmit: (value) => {
             
           
            const { data } = axios.post("https://jsbackendapi.herokuapp.com/api/user/login", {
                email: value.email,
                password: value.password

            }).then(res => {
                console.log( res.headers)
                localStorage.setItem("token", res.headers.token);
                NotificationManager.success(" Logged In Successfuly..... ", "", 3000);
                navigation("/");


            }).catch(err => {
                console.log(err)
                if(err.response.data!==undefined)
                NotificationManager.error(err.response.data, "", 3000);
                else
                NotificationManager.error(err.message , "", 3000);
            })

        },
        validationSchema: Yup.object({
            email: Yup.string().required("*** Email Required").max(20, "Max 20 Characters").min(5, "Minimum 5 Characters"),
             password: Yup.string().required("*** Password Required").max(15, "Max 15 Characters").min(3
                , "Minimum 3 Characters") 


        })

    })
    return (
        <div className='container'>
        <div className="card mb-3 mt-3">
            <div className="row g-0 d-flex align-items-center">
                <div className="col-lg-4 d-none d-lg-flex">
                    <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" alt="Trendy Pants and Shoes"
                        className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
                </div>
                <div className="col-lg-8">
                    <div className="card-body py-5 px-md-5">
                        <form onSubmit={formik.handleSubmit}>


                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="email">Email address</label>
                                <input type="email" id="email" name='email' required className="form-control"
                                    onChange={formik.handleChange}
                                    value={formik.email}
                                    onBlur={formik.handleBlur}
                                />
                            <div>
                            {formik.touched.email && formik.errors.password ? formik.errors.password : null}
                            </div>
                            </div>


                            

                            <div className="form-outline mb-4">
                                <label htmlFor='password'>Password</label>
                                <input type="password" required className="form-control"
                                    id="password"
                                    name="password"
                                    value={formik.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                />
                                <div>
                            {formik.touched.password && formik.errors.password ? formik.errors.password : null}

                                </div>
                            </div>


                            <div>
                            <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                            </div>
                                
                        </form>


                    </div>
                </div>
            </div>
        </div>
        </div>


         
  )
}

export default FormikLogin