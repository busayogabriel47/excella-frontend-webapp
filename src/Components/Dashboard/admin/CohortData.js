import React, { useState } from 'react'
import "../admin/admin.css"
import cohortOne from "../../../images/excellanurse7.png"
import loader from "../../../images/spinner-2.gif"
import { Link } from 'react-scroll'
import axios from 'axios';
import UpdateCohortForm from './updateCohortForm'

function CohortData() {

const [cohorts, setCohorts] = useState([]);
const [updateCohort, setUpdateCohort] = useState({...cohorts})
const [loading, setLoading] = useState(false);



const fetchAllCohorts = async () => {
    try {
        setLoading(true)
        const response = await axios.get('https://excella-api.onrender.com/api/cohorts');
        setCohorts(response.data);
        setLoading(false)
    } catch (error) {
        console.error('Error fetching cohorts:', error)
        setLoading(false)
    }
}

const handleUpdate = (updatedCohort) => {
    setCohorts((prevCohorts)=> {
        prevCohorts.map((cohort)=> (cohort.id === updatedCohort._id ? updatedCohort : cohort))
    })
}

const deleteCohorts = async () => {
    try {
        setLoading(true)
        const response = await axios.get('https://excella-api.onrender.com/api/cohorts');
        setCohorts(response.data);
        setLoading(false)
    } catch (error) {
        console.error('Error fetching cohorts:', error)
        setLoading(false)
    }
}


useState(()=> {
    fetchAllCohorts()
    deleteCohorts()
}, [])

const cohortbanner = cohorts && cohorts.map((cohort)=> {
    console.log('Image path:', cohort.banner);
})

  return (
        <div className='container'>
            <div className='row'>
            {cohorts && cohorts.map((cohort) => (
                    <div className='col-12 col-md-5'>
                    <div class="card">
                        {cohort.banner && (
                            <div className='cart-img-top cohortImTop' style={{backgroundImage: `url(https://res.cloudinary.com/ilove2support/image/upload/v1687463719/Excella-consult/midwives_oncgnv.jpg)`}}></div>
                            
                        )
                        }
                
                        <div class="card-body">
                            <h5 class="card-title">{cohort.name}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            {/* update cohort data modal*/}
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#updateCohort${cohort._id}`}>
                            Edit
                            </button>
                            <div class="modal fade" id={`updateCohort${cohort._id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="updateCohortLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-scrollable">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="updateCohortLabel">Modal title</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <UpdateCohortForm cohort={cohort} onUpdate={handleUpdate}/>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            <Link href="#" class="btn">Delete</Link>
                        </div>
                        
                    </div>
                </div>
                ))}
            </div>
        </div>
  )
}

export default CohortData;