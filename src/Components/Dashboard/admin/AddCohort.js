
import React, { useEffect, useState } from 'react'
import AddCohortForm from './addCohortForm';
import CohortData from './CohortData';



function AddCohort() {




  return (

    <div className='manageCohort'>
          <div className='cohortHeader'>
              <div><h4>Manage Excella cohort</h4></div>
              <div>{/* Add new cohort*/}
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Add new Cohort
              </button>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      <AddCohortForm/>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
  </div>
</div>

<CohortData/>
</div>

  )
}

export default AddCohort