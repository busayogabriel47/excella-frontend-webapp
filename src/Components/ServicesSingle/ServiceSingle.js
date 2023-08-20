import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom'
import './serviceSingle.css'
import moment from 'moment/moment';


const ServicesSingle = ({services}) => {

  const {title} = useParams()

  const post = services.find((ourservice)=> ourservice.title === title);
  
  console.log(post)
  
   if(!post) return <h1>Sorry Our Services are under review. Please check out</h1>
  

    return(
        <div>
            <div className='container'>
                <div className='row serviceSingle'>
                    <div className='col-12 text-center singleTitle'>
                        <p>Posted: {moment(post.createdAt).fromNow()}</p>
                        <h1>{post.title}</h1>
                    </div>
                    <div className='col-12 col-md-6 singleImg'>
                      <img src={post.img} alt={post.title} width="100%"/>
                    </div>
                    <div className='col-12 col-md-6 singleDesc text-white'>
                        <p>{post.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSingle;