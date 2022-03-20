
import checkIcon from '../../assets/image-uploader-master/greenCheckIcon.jpeg';
import '../UploadCard/UploadCard.css';
import './SuccessCard.css';


export default function SuccessCard({name}) {

  return (
    <div className='uploadCard'>
        <h1 className='uploadCard__title'>
            Uploaded Succesfully!
        </h1>
        <img src={checkIcon} alt="" className='checkIcon'/>
        <div>
            <img src={name} alt="" className='uploaded-image'/>
        </div>
        <div className='url__box'>
            <p className='url__text'>{name}</p>
            <button className='button' onClick={() =>  navigator.clipboard.writeText(name)}>
              Copy Link
            </button>
        </div>
    </div>
  )
}
