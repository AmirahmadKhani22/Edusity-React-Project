function GalleryItem({src , alt}) {
    return (
        <div className="main-gallery-item">
            <img 
                className="main-gallery-item-img"
                src={src} 
                alt={alt} 
            />
        </div>
    )
}

export default GalleryItem
