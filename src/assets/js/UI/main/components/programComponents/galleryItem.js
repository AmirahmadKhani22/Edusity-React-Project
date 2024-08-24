import GalleryItemDescription from './galleryItemDescription.js'

function GalleryItem({item:{src,alt} , description}) {
    return (
        <div className="main-gallery-item">
            <img 
                className="main-gallery-item-img"
                src={src} 
                alt={alt} 
            />
            <GalleryItemDescription {...description} />
        </div>
    )
}

export default GalleryItem
