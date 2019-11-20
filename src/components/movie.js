import React from 'react';
import './layout.css'

const Movie =(props)=>{
    const {data} = props;
    return(
        <div>
            <h1>{data.title}</h1>
            <p>{data.about}</p>
            <img src={data.imageNew} className="images"/>
        </div>
    );
}

export default Movie;