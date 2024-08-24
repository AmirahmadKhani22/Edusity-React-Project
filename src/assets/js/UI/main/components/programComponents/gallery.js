import GalleryItem from './galleryItem.js'
import graduationDegree from './../../../../../img/program/GD.png'
import masterDegree from './../../../../../img/program/MD.png'
import postGraduation from './../../../../../img/program/PG.png'
import GDdes from './../../../../../img/program/GD-des.png'
import MDdes from './../../../../../img/program/MD-des.png'
import PGdes from './../../../../../img/program/PG-des.png'

function Gallery() {
    return (
        <div className="main-gallery">
            <GalleryItem 
                item={{
                    src: graduationDegree,
                    alt: 'graduation degree',
                }}
                description={{
                    src: GDdes,
                    alt: 'graduation degree description',
                    text: 'graduation degree',
                }}
            />
            <GalleryItem 
                item={{
                    src: masterDegree,
                    alt: 'master degree',
                }}
                description={{
                    src: MDdes,
                    alt: 'master degree description',
                    text: 'master degree',
                }}
            />
            <GalleryItem 
                item={{
                    src: postGraduation,
                    alt: 'post graduation',
                }}
                description={{
                    src: PGdes,
                    alt: 'post graduation description',
                    text: 'post graduation',
                }}
            />
        </div>
    )
}

export default Gallery
