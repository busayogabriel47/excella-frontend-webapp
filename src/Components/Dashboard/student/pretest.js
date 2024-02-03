/* eslint-disable jsx-a11y/iframe-has-title */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './students.css';



const Pretest = ({studentData, formUrl}) => {

    

    console.log(studentData)


    if(!studentData){
        return(
            <p>Loading...</p>
        )
    }


    const { cohorts } = studentData;
    console.log(cohorts)

  

    return (
        <div>
            <div className="row">
        {formUrl ? (
          <div className="col-12 updates pl-0">
            <div className="preTest">
              {/* Render iframes or other components based on formUrls */}
                
              
            </div>
          </div>
        ) : (
          <p>No Pre-content assessment</p>
        )}
      </div>
        </div>
      );
}

export default Pretest