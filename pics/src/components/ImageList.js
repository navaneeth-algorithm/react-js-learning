import './ImageList.css';
import ImageShow from "./ImageShow";

function ImageList({images}){
    return (
        <div className='image-list'>
            {images.map((image,index)=>(<ImageShow key={image.id} imageURL={image.urls.small} />))}        
        </div>
    )
}

export default ImageList;