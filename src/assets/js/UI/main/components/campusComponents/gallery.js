import GalleryItem from './galleryItem.js'
import teamWork from './../../../../../img/campus/1.png'
import two from './../../../../../img/campus/2.png'
import three from './../../../../../img/campus/3.png'
import four from './../../../../../img/campus/4.png'



function Gallery() {
    return (
        <div className="main-gallery">
            <GalleryItem 
                src={teamWork} 
                alt="team work"
            />
            <GalleryItem 
                src={two} 
                alt="quite library"
            />
            <GalleryItem 
                src={three} 
                alt="graduation"
            />
            <GalleryItem 
                src={four}
                alt="graduation certificate"
            />
        </div>
    )
}

export default Gallery
