import React, { useState } from 'react';
import { Alert, Button, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Login = () => {
    const[logindata,setLoginData]=useState({})
    const { loginUser,user,
     logout,isLoading,authError}=useFirebase()
    
     const handleOnBlur=e=>{
         const field=e.target.name;
         const value=e.target.value;
         const newLoginData={...logindata}
         newLoginData[field]=value
         setLoginData(newLoginData)
     
     }
     const handleloginSubmit=e=>{
        
         console.log(logindata)
         // registerUser(logindata.email,logindata.password,logindata.name,history)
         loginUser(logindata.email,logindata.password)  
         e.preventDefault()
     }
    return (
        <div>
            <form onSubmit={handleloginSubmit}>
            
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
           <br/>
         
      <button style={{backgroundColor:'green',color:'white',borderRadius:'7px'}} type='submit'>Login</button>
      </form>


      {isLoading && <Spinner animation="border" variant="primary" />}
                        {/* {user?.email && <Alert variant="success">Logged in successfully!</Alert>} */}
                        {authError && <span classNAme="danger">{authError}</span>}
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/signup">
                            Are you new user?Please Sign Up
                        </NavLink>
        </div>
    );
};

export default Login;

         
