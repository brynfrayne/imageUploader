
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
            <img src={"http://localhost:8080/result/"+name} alt="" className='uploaded-image'/>
        </div>
        <div className='url__box'>
            <p className='url__text'>{"http://localhost:8080/result/"+name}</p>
            <button className='button' onClick={() =>  navigator.clipboard.writeText("http://localhost:8080/result/"+name)}>
              Copy Link
            </button>
        </div>
    </div>
  )
}
