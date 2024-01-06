import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './students.css';



const Pretest = ({studentData}) => {

    if(!studentData){
        return(
            <p>Loading...</p>
        )
    }


    const { student, cohorts } = studentData;
    console.log(studentData)

    const formUrl = cohorts.length > 0 ? cohorts[0].formUrl : null;

  return (
    <div>
        <div className='row'>
                    {formUrl ? (
                        <div className='col-12 updates pl-0'>
                            <div className="pretTest">
                            <iframe className="d-none d-md-block test" src={formUrl} width="1400" height="10603" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                            <iframe className="d-block d-md-none test" src={formUrl} width="400" height="10603" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                            </div>
                        </div>
                    ): (
                        <p>No form URL available</p>
                    )}
                    
        </div>
    </div>
  )
}

export default Pretest