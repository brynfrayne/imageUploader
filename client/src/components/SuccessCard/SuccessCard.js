import React from 'react'
import Stock from '../../assets/image-uploader-master/stock.jpg';
import checkIcon from '../../assets/image-uploader-master/greenCheckIcon.jpeg';
import FileUploader from '../Button/Button';
import '../UploadCard/UploadCard.css';
import './SuccessCard.css';

export default function SuccessCard() {
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
