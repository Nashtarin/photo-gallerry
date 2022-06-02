import { sendSignInLinkToEmail } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useFirebase from '../../../Hooks/useFirebase';
import Photo from './Photo';



const Photogallery = () => {
    const[loading,setLoading]=useState(true)
    const {user}=useFirebase()
    const[interest,setInterest]=useState(null)
    const[image,setImage]=useState(null)
    const[photos,setPhotos]=useState([])
    useEffect(()=>{
      fetch('https://still-hamlet-57554.herokuapp.com/photos')
      .then(res=>res.json())
      .then(data=>{setPhotos(data)
      setLoading(false)})
    },[photos])
    const myPhotos=photos.filter(p=>user.email===p.email)
    
    const photoSubmitHandler=e=>{
        e.preventDefault()
        if(!image){
            return
        }
        const formData=new FormData()
        formData.append('name',user.displayName)
        formData.append('email',user.email)
        formData.append('interest',interest)
        formData.append('image',image)
       
        
        fetch('https://still-hamlet-57554.herokuapp.com/photos', {
            method: 'POST',                         
           
            body:formData

        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Photo Uploaded')
               
                 
              
                  
                }
                
              
            })
        .catch(error=>{
            console.error('Error',error)
        })}
            console.log(interest,image)

             
    return (
       <div className="d-flex justify-content-between">
           <div style={{width:'70%'}}>
             <h1 className='ms-5 text-primary'>My Photo Gallery</h1>
             <div className="row row-cols-1 row-cols-md-3 g-1">
                 {loading &&   <Spinner className="mx-auto"animation="border" variant="primary" />}
          {myPhotos.map(p=><Photo key={p._id} photo={p}></Photo>)}
     
        </div>
           </div>

           <div classNAme="my-5 border border-primary">
            <h3>Upload Your Photo</h3>

 <input type='text' defaultValue={user.displayName}/>
 <br/>
<input  type='text' defaultValue={user.email}/>



<br/>
<input
accept='image/*'
name='photo'
type='file'
onChange={e=>setImage(e.target.files[0])}
required
placeholder='Choose your photo'


/>
<br/>


<select required name="interest" onChange={e=>setInterest(e.target.value)}>
<option  value="Nature">Nature</option>
<option  value="Travelling">Travelling</option>
<option  value="Cities">Cities</option>
</select> <br/>
           
        <button style={{backgroundColor:'green',color:'white',borderRadius:'7px'}} onClick={photoSubmitHandler}>Add Photo</button>
      
           </div>
       </div>
    );
};

export default Photogallery;