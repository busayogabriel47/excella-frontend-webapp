import React, {useState, useEffect} from "react"
import { useDispatch, useSelector } from 'react-redux';
import { teacherprofile } from '../../../reduxtk/userAction';




const Tprofile = ({user}) => {

    const [image, setImage] = useState("");
    const [url, setUrl] = useState(undefined);

    const dispatch = useDispatch() ;

    const{currentUser} = useSelector((state)=>state.user)

    useEffect(() => {
        if (url) {
          uploadFields();
        }
      });


      const uploadPic = () => {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "voting");
        data.append("cloud_name", "dvfpkko1z");
        fetch("https://api.cloudinary.com/v1_1/dvfpkko1z/image/upload", {
          method: "post",
          body: data,
        })
          .then((res) => res.json())
          .then((data) => {
            setUrl(data.url);
          })
          .catch((err) => {
            console.log(err);
          });
      };

      const uploadFields = () => {
        dispatch(teacherprofile(url));
      };

      const PostData = () => {
        if (image) {
          uploadPic();
        } else {
          uploadFields();
        }
      };

    return (
        <>
                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">
                                    <h2>John Doe</h2>
                                    <div className='row productB mt-4'>
                                        <div className='col-12 col-md-4 mt-4 profileOne text-center'>
                                            {user &&  <img src={user[0].pic} alt='excella'/>}
                                            
                                            <i class="fa-regular fa-pen-to-square"></i>

                                            <div className='upload mt-5'>
                                            <div class="input-group mb-3">
                                                <label class="input-group-text" for="inputGroupFile01">Upload</label>
                                                <input type="file" class="form-control" onChange={(e)=> {setImage(e.target.files[0])}} id="inputGroupFile01"/>
                                                <button className="btn btn-primary" onClick={()=> PostData()}>Upload image</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-12 col-md-8 mt-4 profileTwo'>
                                            <table className='profileTb'>
                                                <tbody>
                                                    <tr>
                                                        <td>First name:</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Last name:</td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>Cohort:</td>
                                                        <td>January</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Date of birth:</td>
                                                        <td>08/10/1994</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Gender:</td>
                                                        <td>Male</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Email:</td>
                                                        <td>omotukabusayo22@gmail.com</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Phone Number:</td>
                                                        <td>+234-8061646491</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Address:</td>
                                                        <td>20, williams crescent</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
        </>
    )
}

export default Tprofile;