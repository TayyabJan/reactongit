import React, { lazy, Suspense, } from 'react'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import BootstrapUI from '../Designs/BootstrapUI';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css'
import { NotificationContainer } from 'react-notifications'

import Product from './Product'
import Products from './Products'
import Error from './Error'
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import FormikLogin from './FormikLogin'

 
const App = () => {
    const About = lazy(() => import('./About'))
    return (
        <div>
            <Router>    
            <NotificationContainer />


                <nav className="navbar navbar-expand-lg navbar-light bg-light">

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-link">
                                <Link to="/FormikLogin"> FormikLogin </Link> {' '}
                            </li>
                            <li className="nav-link active">
                                <Link to="/"> Home </Link> {' '}
                            </li>

                            <li className="nav-link">
                                <Link to="/register"> Register </Link> {' '}
                            </li>
                            <li className="nav-link">
                                <Link to="/about"> About </Link> {' '}
                            </li>
                            <li className="nav-link">
                                <Link to="/product/1"> Product </Link> {' '}
                            </li>
                            <li className="nav-link">
                                <Link to="/products"> Products </Link> {' '}
                            </li>
                            <li className="nav-link">
                                <Link to="/Login"> Login </Link> {' '}
                            </li>
                            <li className="nav-link">
                                <Link to="/Logout"> Logout </Link> {' '}
                            </li>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    {/* to make all routes as lazy loading , enclose all routes in Suspense tag. */}
                    <Route path='/' element={<Home />} />]
                    <Route path='/About' element={<Suspense fallback={<p>Loading....</p>}><About /></Suspense>} />
                    <Route path='/Product/:PID' element={<Product />} />
                    <Route path='/Products' element={<Products />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Logout' element={<Logout />} />
                    <Route path='/Register' element={<Register />} />
                    <Route path='/FormikLogin' element={<FormikLogin />} />
                    <Route path='*' element={<Error />} />

                </Routes>
            </Router>
        </div>
    )
}

export default App