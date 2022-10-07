import React, {useState } from 'react'

import axios from 'axios';
import BootstrapUI from '../Designs/BootstrapUI'
import 'react-notifications/lib/notifications.css'
import { NotificationManager } from 'react-notifications'
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react"

const verifytoken = require("./verifytoken")
const Register = () => {
  const navigation = useNavigate();


  useEffect(() => {
    
    if (!verifytoken()) {  
      NotificationManager.warning("Log in First..... ", "",3000);
     return navigation("/Login")}
      
  }, [])


  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const register = (e) => {
    e.preventDefault();
    //alert(localStorage.getItem("token"))
    const config = {  headers: 
    { 
      "auth-token": localStorage.getItem("token")
    }
  }
  //alert(localStorage.getItem("token"))
  const bodyparams = {
    name: name,
      email: email,
      password: password,
      address: address
  }
    axios.post("https://jsbackendapi.herokuapp.com/api/user/register",bodyparams,config
      
    ).then(res => {
      NotificationManager.success(`User ${name} is Successfully registered`,"",3000)
    }).catch(err => {
      NotificationManager.warning(err.response.data,"",3000)
    })
  }
  return (
    <div className='container'>
      <form onSubmit={(e) => register(e)}>

        <div className="form-outline mb-4">
          <label className="form-label" for="fullName">Full Name</label>
          <input type="text" id="fullName" className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}


          />

        </div>

        <div className="form-outline mb-4">
          <label className="form-label" for="email">Email</label>
          <input type="eamil" id="email" className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}

          />

        </div>


        <div class="form-outline form-white mb-4">
          <label class="form-label" for="typePasswordX">Password</label>
          <input type="password" id="typePasswordX" class="form-control form-control-lg"
            onChange={(e) => setPassword(e.target.value)}
            value={password}

          />
        </div>

        <label className="form-label" for="address">Address</label>
        <input type="text" id="address" className="form-control"
          onChange={(e) => setAddress(e.target.value)}
          value={address}

        />
        <div className="form-outline mb-4">
          <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

        </div>
      </form>
    </div>
  )
}

export default Register