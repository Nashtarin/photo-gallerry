import React from 'react';
import './Home.css'


const Home = () => {
    const photourl=['https://i.ibb.co/ZgD4myp/527994-352307114849564-254785908-n.jpg','https://i.ibb.co/ZWk2sT0/30020217-1817320561665411-1615468257-n.jpg','https://i.ibb.co/xGQYcs9/37421192-2244757525536418-416900264830697472-n.jpg']
    return (
        <div className='d-flex'>
      {photourl.map(photo=><li style={{listStyleType:'none'}}><img style={{width:'250px',height:'150px',marginRight:'10px'}}src={photo} alt=""  /></li>)}
        </div>
    );
};

export default Home;