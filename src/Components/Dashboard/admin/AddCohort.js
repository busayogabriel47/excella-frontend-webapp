
import React, { useEffect, useState } from 'react'
import AddCohortForm from './addCohortForm';
import CohortData from './CohortData';
import UploadTest from './upload-test';



function AddCohort() {




  return (

    <div className='manageCohort'>
          <div className='cohortHeader'>
              <div><h4>Manage Excella cohort</h4></div>
              <div>{/* Add new cohort*/}
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Add new Cohort
              </button>

            {/* Add new cohort */}
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

<div class="row">
            <div class="col-md-8">
                <div class="tab-container-one">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item active"><a class="nav-link active" href="#home" role="tab" aria-controls="home" data-bs-toggle="tab">Cohorts</a></li>
                        <li class="nav-item"><a class="nav-link" href="#profile" role="tab" aria-controls="profile" data-bs-toggle="tab">Pre-content assessment</a></li>
                        <li class="nav-item"><a class="nav-link" href="#messages" role="tab" aria-controls="messages" data-bs-toggle="tab">Messages</a></li>
                        <li class="nav-item"><a class="nav-link" href="#settings" role="tab" aria-controls="settings" data-bs-toggle="tab">Settings</a></li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                          <CohortData/>
                        </div>
                        <div class="tab-pane" style={{padding: "2rem 0"}} id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <UploadTest/>
                          </div>
                        <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">
                            Messages...</div>
                        <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                            Settings...</div>
                    </div>
                </div>
            </div>
      </div>
    
{/* <CohortData/> */}
</div>

  )
}

export default AddCohort