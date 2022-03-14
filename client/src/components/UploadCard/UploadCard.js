import React, { useState } from 'react';
import Icon from '../../assets/image-uploader-master/image.svg';
import FileUploader from '../Button/Button';
import axios from 'axios';
const uniqid = require("uniqid");


export default function UploadCard() {
    const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);

    // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);
    
    // Programatically click the hidden file input element
    // when the Button component is clicked
  const handleClick = event => {
    
    hiddenFileInput.current.click();

   
	};

      // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
    const handleChange = event => {
        console.log(selectedFile)
        setSelectedFile(event.target.files[0]);
		setIsSelected(true);
        console.log(selectedFile.name); 
        
        const formData = new FormData();

    formData.append('Image', selectedFile);
    console.log(formData);
    console.log(event.target.files[0])
    axios.post("http://localhost:8080/images", {
        file: selectedFile,
        name: 'bryn'
    })
        
        .then((result) => {
            console.log('Success:', result);
            alert('it worked?')
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
        <FileUploader handleClick={handleClick} handleChange={handleChange} hiddenFileInput={hiddenFileInput}/>
    </div>
  )
}
