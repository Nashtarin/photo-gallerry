import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import './Home.css'
import Photo from './Photogallery/Photo';


const Home = () => {
  const[photos,setPhotos]=useState([])
  const[loading,setLoading]=useState(true)
  useEffect(()=>{
    fetch('https://still-hamlet-57554.herokuapp.com/photos')
    .then(res=>res.json())
    .then(data=>{setPhotos(data)
    setLoading(false)})
  },[])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-1">
           {loading &&   <Spinner className="mx-auto"animation="border" variant="success" />}
          {photos.map(p=><Photo key={p._id} photo={p}></Photo>)}
     
        </div>
    );
};

export default Home;