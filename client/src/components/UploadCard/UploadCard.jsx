import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../assets/image-uploader-master/image.svg';
import axios from 'axios';
import LoadingCard from '../LoadingCard/LoadingCard';
import SuccessCard from '../SuccessCard/SuccessCard';

export default function UploadCard() {
    
    const [selectedFile, setSelectedFile] = useState();
    const [uploading, setUploading] = useState(false);
    const [uploaded, setUploaded] = useState(false);
    const [imgName, setImgName] = useState("");
    const hiddenFileInput = useRef();

    const handleChange = event => {
        setSelectedFile(event.target.files[0]);
        console.log(selectedFile)
    };

    useEffect(() => {
        
        if (!selectedFile) return;

        setUploading(true);
        const formData = new FormData();
        formData.append('photo', selectedFile);

        const config = {
            headers: {
                "content-type": "multipart/form-data" 
            }
        };
        const url = "http://localhost:8080/images"
        console.log(selectedFile.name)

        axios.post(url, formData, config)
        .then((_result) => {
            setImgName(selectedFile.name);
            setUploaded(true);
        })
        .then(_result=>{
            setTimeout(() => {
                setUploading(false);
            }, 1000);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, [selectedFile]);
        

    

  return (
    <>
        {uploading ? 
            <LoadingCard/>
        :
        (uploaded ? <SuccessCard name={imgName}/>:<div className='uploadCard'>
            <h1 className='uploadCard__title'>
                Upload your image
            </h1>
            <p className='uploadCard__text'>
                File should be Jpeg, Png...
            </p>
            <div 
            className='image-upload'
            onDragOver={(e) => {
                e.preventDefault();
              }}
              onDrop={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedFile(e.dataTransfer.files[0]);
              }}
            >
                <img src={Icon} alt="" />
                <p className='uploadCard__text'>
                    Drag & Drop your image here
                </p>
            </div>
            <p className='uploadCard__text'>Or</p>
            <button className="button" onClick={() => hiddenFileInput.current.click()} >
            Choose a file
            </button>
            <input
                type="file"
                name="photo"
                ref={hiddenFileInput}
                multiple={false}
                onChange={handleChange}
                style={{display: 'none'}} 
            />   
            </div>)
            
            
        }
        </>
        


         
  )
}
