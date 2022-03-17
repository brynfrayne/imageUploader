import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../assets/image-uploader-master/image.svg';
import FileUploader from '../Button/Button';
import axios from 'axios';
import FormData from 'form-data';
const uniqid = require("uniqid");



export default function UploadCard() {
    const [selectedFile, setSelectedFile] = useState();
	

    // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);
    
    // Programatically click the hidden file input element
    // when the Button component is clicked
  const handleClick = event => {
    hiddenFileInput.current.click();
	};
    const navigate = useNavigate();
      // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
    const handleChange = event => {
        
        setSelectedFile(event.target.files[0]);
		// setIsSelected(true);
        
        
        const formData = new FormData();

        formData.append('photo', selectedFile);
        
        for (let value of formData.values()) {
            console.log(value);
        }
        const config = {
            headers: {
                "content-type": "multipart/form-data" 
            }
        };
        const url = "http://localhost:8080/images"

        // for whatever reason my file is only being sent as an empty object??????

        axios.post(url, formData, config)
        .then((result) => {
            console.log('Success:', result);
            
        })
        .then((result) => {
            navigate('/result');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
  };

    

  return (
    <div className='uploadCard'>
        <h1 className='uploadCard__title'>
            Upload your image
        </h1>
        <p className='uploadCard__text'>
            File should be Jpeg, Png...
        </p>
        <div className='image-upload'>
            <img src={Icon} alt="" />
            <p className='uploadCard__text'>
                Drag & Drop your image here
            </p>
        </div>
        <p className='uploadCard__text'>Or</p>
        {/* <form > */}
        <FileUploader handleClick={handleClick} handleChange={handleChange} hiddenFileInput={hiddenFileInput}/>
        {/* </form> */}
    </div>
  )
}
