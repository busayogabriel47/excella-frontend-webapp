import React from 'react'
import './admin.css';
import Dropzone from 'react-dropzone';
import UploadedCourses from './uploadedCourses';



function CourseUploads(
    {handleInput, 
    handleSubmit, 
    inputState,
    setInputState,
    file,
    setFile,
    previewScr,
    setPreviewScr,
    errorMsg,
    setErrorMsg,
    isPrview, 
    setIsPreview,
    onDrop,
    dropRef,
    updateBorder
}
    ) {
  return (
    <div className='row'>
        {/* Upload courses column*/}
        <div className='col-12'>
                <div className='uploads_wrapper'>
                    <div className='course_uploads '>
                        <h1>Upload course materials</h1>

                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="title" class="form-label visually-hidden" >Email address</label>
                                <input
                                type="text" 
                                class="form-control" 
                                id="title" 
                                placeholder="Title"
                                name='title'
                                value={inputState.title || ""}
                                onChange={handleInput}/>
                            </div>

                            <div class="mb-3">
                                <label for="description" class="form-label visually-hidden">Email address</label>
                                <input 
                                type="text" 
                                class="form-control" 
                                id="description" 
                                placeholder="Description"
                                name='description'
                                value={inputState.description || ""}
                                onChange={handleInput}/>
                            </div>

                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                        
                                    <Dropzone 
                                    onDrop={onDrop}
                                    onDragEnter={() => updateBorder('over')}
                                    onDragLeave={() => updateBorder('leave')}
        >

                                    {({
                                            getRootProps, getInputProps 
                                    })=> (
                                        <fieldset {...getRootProps({className: 'upload_dropZone text-center mb-3 p-4'})} ref={dropRef}>

                                        <legend class="visually-hidden">Image uploader</legend>

                                        <svg class="upload_svg" width="60" height="60" aria-hidden="true">
                                        <use href="#icon-imageUpload"></use>
                                        </svg>

                                        <p class="small my-2">Drag &amp; Drop logo image(s) inside dashed region<br/><i>or</i></p>

                                        <input {...getInputProps()}/>

                                        {file && (
                                            <div>
                                                <strong>Selcted file: </strong> {file.name}
                                            </div>
                                        )}

                                        <label class="btn btn-upload mb-3" for="upload_image_logo">Choose file(s)</label>

                                        <div class="upload_gallery d-flex flex-wrap justify-content-center gap-3 mb-0"></div>

                                        </fieldset>
                                    )}
                                        
                                    </Dropzone>
                                </div>

                                <div className="col-12 col-md-6 preview__wrapper">
                                {previewScr ? (
                                    isPrview ? (
                                        <div className='img-preview'>
                                            <img className='preview-img' src={previewScr} alt='Preview' width="100%"/>
                                        </div>
                                    ):(
                                        <div className='preview-message'>
                                            <p>No preview available for this file</p>
                                        </div>
                                    )
                                ): (
                                    <div className='preview-msg'>
                                        <p>Image preview will be shown here after selection</p>
                                    </div>
                                )
                                }
                                    
                                </div>

                            </div>

                                <button type='submit' className='excella-btn p-3'>Upload</button>
                        </form>

                    </div>
            </div>
        </div>

        {/* uploaded course column*/}

        <UploadedCourses/>
    </div>
  )
}

export default CourseUploads