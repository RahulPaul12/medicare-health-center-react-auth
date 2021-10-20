import React from 'react';
import { Link } from 'react-router-dom';

import './service.css';

const Service = ({service}) => {
    const {id,img, name , description} = service;
    return (
        <div className="services p-5 m-3 border border-warning rounded-bottom">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>{description}</p>
            <Link to={`/details/${id}`}>
           <button className="btn btn-warning">Details</button>
             </Link>
             
        </div>
    );
};

export default Service;