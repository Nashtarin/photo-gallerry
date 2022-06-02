import React from 'react';

const Photo =({photo}) => {
    const {image,interest}=photo
    return (
        <div className='col mb-3'>
           <img style={{height:"300px",width:'97%',borderRadius:'13px'}} src={`data:image/*;base64,${image}`} alt="" srcset="" /> 
        </div>
    );
};

export default Photo;