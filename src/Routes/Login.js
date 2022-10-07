import axios from 'axios';
import React, { useState, useEffect } from 'react'
import 'react-notifications/lib/notifications.css'
import { NotificationManager } from 'react-notifications'
import { useNavigate } from 'react-router-dom';
const verifytoken = require("./verifytoken")


const Login = () => {

    const navigation = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {

        if (verifytoken()) {

            return navigation("/")
        }

    }, [])

    const login = async (e) => {
        e.preventDefault();

        const user = {
            email: email,
            password: password
        }
        const { data } = axios.post("https://jsbackendapi.herokuapp.com/api/user/login", {
            email: email,
            password: password

        }).then(res => {
            console.log(res);

            localStorage.setItem("token", res.data);
            NotificationManager.success(" Logged In Successfuly..... ", "", 3000);
            navigation("/");


        }).catch(err => {
            NotificationManager.error(err.response.data, "", 3000);
        })
        //  const {data} = await axios.get("http://localhost:3001/api/user/test").then(res =>{
        //         alert(res.data);
        //     })
    }
    return (
        <div className='container'>

            <section class=" text-center text-lg-start">
                {/* <style>
    .rounded-t-5 {
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }

    @media (min-width: 992px) {
      .rounded-tr-lg-0 {
        border-top-right-radius: 0;
      }

      .rounded-bl-lg-5 {
        border-bottom-left-radius: 0.5rem;
      }
    }
  </style> */}
                <div className="card mb-3">
                    <div className="row g-0 d-flex align-items-center">
                        <div class="col-lg-4 d-none d-lg-flex">
                            <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" alt="Trendy Pants and Shoes"
                                class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5" />
                        </div>
                        <div class="col-lg-8">
                            <div class="card-body py-5 px-md-5">

                                <form onSubmit={(e) => login(e)}>

                                    <div class="form-outline mb-4">
                                        <input type="email" id="form2Example1" required className="form-control"
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                        />
                                        <label class="form-label" for="form2Example1">Email address</label>
                                    </div>


                                    <div class="form-outline mb-4">
                                        <input type="password" id="form2Example2" required class="form-control"
                                            onChange={(e) => setPassword(e.target.value)}
                                            value={password}
                                        />
                                        <label class="form-label" for="form2Example2">Password</label>
                                    </div>


                                    <div class="row mb-4">
                                        <div class="col d-flex justify-content-center">

                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                                                <label class="form-check-label" for="form2Example31"> Remember me </label>
                                            </div>
                                        </div>

                                        <div class="col">

                                            <a href="#!">Forgot password?</a>
                                        </div>
                                    </div>


                                    <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Login