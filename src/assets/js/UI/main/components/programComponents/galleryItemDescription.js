function GalleryItemDescription({src,alt,text}) {
    return (
        <div className="description">
            <img 
                className='description-img'
                src={src} 
                alt={alt} 
            />
            <p>
                {text}
            </p>
        </div>
    )
}

export default GalleryItemDescription
