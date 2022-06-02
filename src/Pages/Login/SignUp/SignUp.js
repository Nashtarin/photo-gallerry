import { Alert } from 'bootstrap';
import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import './signup.css'

const SignUp = () => {
 
    const[logindata,setLoginData]=useState({})
   const { userSignUp,user,
    logout,isLoading,authError}=useFirebase()
   
    const handleOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...logindata}
        newLoginData[field]=value
        setLoginData(newLoginData)
    
    }
    const handleSignupSubmit=e=>{
       
        console.log(logindata)
        console.log(user)
        // registerUser(logindata.email,logindata.password,logindata.name,history)
        userSignUp(logindata.name,logindata.email,logindata.password,logindata.interrest)  
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSignupSubmit}>
              <input

           
           name="name" 
           onBlur={handleOnBlur}
           placeholder='Enter Your Name' 
            />
            <br/>
          <input
           
           name="email" 
           type="email"
           onBlur={handleOnBlur}
          placeholder='Enter Your Email' />
          <br/>
          <input
          
           name="password"
           type='password'
           onBlur={handleOnBlur}
           placeholder='Enter your password'/>
          <select  name="interest" onChange={handleOnBlur}>
        <option  value="Nature">Nature</option>
        <option  value="Travelling">Travelling</option>
        <option  value="Cities">Cities</option>
      </select> <br/>
      <button style={{backgroundColor:'blue',color:'white',borderRadius:'7px'}} type='submit'>Sign Up</button>
      </form>
      {isLoading && <Spinner animation="border" variant="primary" />}
                        {/* {user?.email && <Alert variant="success">Sign successfully!</Alert>} */}
                        {authError && <span className="text-danger">{authError}</span>}
                       <br/>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            Already Registered? Please Login
                        </NavLink>
        </div>
    );
};

export default SignUp;