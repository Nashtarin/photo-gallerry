import React, { useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref,set } from "firebase/database"
import firebaseConfig from '../../../Firebase/FirebaseConfig';

const Photogallery = () => {
    const app = initializeApp(firebaseConfig);
    // const db = getFirestore(app);
    const db = getDatabase();





    const [formData,setFormData]=useState({})
    const handleOnBlur=e=>{
        const field=e.target.name;
        let value=e.target.value;
      
        const newFormData={...formData}
        newFormData[field]=value
        setFormData(newFormData)
    
    }
    const handlePhoto=e=>{
        const field=e.target.name;
        let value=e.target.files[0];
      
        const newFormData={...formData}
        newFormData[field]=value
        setFormData(newFormData)
    
    }
   
    const photoSubmitHandler=(e)=>{
        e.preventDefault()
        
function writeUserData(userId, name, email, imageUrl) {
    const db = getDatabase();
    set(ref(db, 'photos/' + userId), {
     formData
    });
  }

        console.log(formData)


    }
    return (
       <div className="container d-flex justify-content-between">
           <div>
             <h1>My Photo Gallery</h1>
           </div>

           <div classNAme="my-5">
            <h3>Upload Your Photo</h3>
           <form onSubmit={photoSubmitHandler}>
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
accept='image/*'
name='photo'
type='file'
onChange={handlePhoto}
placeholder='Choose your photo'


/>
<br/>

<select  name="interest" onChange={handleOnBlur}>
<option  value="Nature">Nature</option>
<option  value="Travelling">Travelling</option>
<option  value="Cities">Cities</option>
</select> <br/>
           
        <button style={{backgroundColor:'green',color:'white',borderRadius:'7px'}} type='submit'>Add Photo</button>
        </form>
           </div>
       </div>
    );
};

export default Photogallery;