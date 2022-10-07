import { Formik } from 'formik'
import React from 'react'
import { useFormik} from 'formik'
import * as Yup from 'yup'


const FormikLogin = () => {
const formik = useFormik({
    initialValues:{
        username: "",
        password: ""

    },
    onSubmit: (value)=>{
        console.log(value)

    },
    validationSchema: Yup.object({
        username : Yup.string().required("Value Required").max(15,"Max 15 Characters").min(3,"Minimum 3 Characters")
        , password : Yup.string().required("Value Required").max(20,"Max 20 Characters").min(8,"Minimum 8 Characters")
        
        
    })
        
})
  return (
    <div>
        <form onSubmit={formik.handleSubmit}>

        <label htmlFor='username'>Username</label>
        <input type="text"
        id="username"
        name="username" 
        value={formik.username}
        onChange={formik.handleChange}
        onBlur= { formik.handleBlur}
        
        />
 {formik.touched.username  &&  formik.errors.password ? formik.errors.password : null }

<label htmlFor='password'>password</label>
        <input type="password"
        id="password"
        name="password" 
        value={formik.password}
        onChange={formik.handleChange}
        onBlur= { formik.handleBlur}
        />
        {formik.touched.password  &&  formik.errors.password ? formik.errors.password : null }
        <button type='submit'>Login</button>
        </form>
      
        
    </div>
  )
}

export default FormikLogin