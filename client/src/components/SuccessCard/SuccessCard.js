import React, { useState } from 'react'
import Stock from '../../assets/image-uploader-master/stock.jpg';
import checkIcon from '../../assets/image-uploader-master/greenCheckIcon.jpeg';
import '../UploadCard/UploadCard.css';
import './SuccessCard.css';
import LoadingCard from '../LoadingCard/LoadingCard';

export default function SuccessCard() {
  const [isSelected, setIsSelected] = useState(false);

  if(!isSelected) {
    return <LoadingCard/>;
  }
  return (
    <div className='uploadCard'>
        <h1 className='uploadCard__title'>
            Uploaded Succesfully!
        </h1>
        <img src={checkIcon} alt="" className='checkIcon'/>
        <div>
            <img src={Stock} alt="" className='uploaded-image'/>
        </div>
        <div className='url__box'>
            <p className='url__text'>wwww.madeupURL.org</p>
            {/* <FileUploader buttonText={'Copy Link'}/> */}
            <button className='button'>Copy Link</button>
        </div>
    </div>
  )
}
