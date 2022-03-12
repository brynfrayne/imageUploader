import React from 'react'
import Icon from '../../assets/image-uploader-master/image.svg';
import FileUploader from '../Button/Button';
import './UploadCard.css';

export default function UploadCard() {
    const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

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
        <FileUploader />
    </div>
  )
}
