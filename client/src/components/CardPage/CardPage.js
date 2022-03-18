import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SuccessCard from '../SuccessCard/SuccessCard';
import UploadCard from '../UploadCard/UploadCard';
import LoadingCard from '../LoadingCard/LoadingCard';

export default function CardPage() {
  const [selectedFile, setSelectedFile] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
	

    // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef(null);
    
    
    // when the Button component is clicked
  const handleClick = event => {
    hiddenFileInput.current.click();
	};
    const navigate = useNavigate();
      
    const handleChange = event => {
        
        setSelectedFile(event.target.files[0]);
        setIsClicked(true);
		    
        
        const formData = new FormData();

        formData.append('photo', selectedFile);
        
        for (let value of formData.values()) {
            console.log(value);
        }
        console.log(selectedFile)
        const config = {
            headers: {
                "content-type": "multipart/form-data" 
            }
        };
        const url = "http://localhost:8080/images"
        console.log(selectedFile.name)

        if (selectedFile) {
        axios.post(url, formData, config)
        .then((result) => {
            console.log('Success:', result);
            setIsSelected(true);
        })
        .then((result) => {
            navigate('/result');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
  };

  if (!isSelected){
      return <UploadCard hiddenFileInput={hiddenFileInput} handleChange={handleChange} handleClick={handleClick} />
  } else if (isClicked) {
      return <LoadingCard/>
  } else  {
      return <SuccessCard fileName={selectedFile.name} isSelected={isSelected}/>
  }
  
  
}
