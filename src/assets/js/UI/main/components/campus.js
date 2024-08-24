import MainTitle from './partsTitle.js'
import Gallery from './campusComponents/gallery.js'
import SeeMore from './campusComponents/seeMore.js'

function Campus() {
    return (
        <article id="campus" className="main-part">
            <MainTitle 
                description="GALLERY"
                title="Campus Photos"
            />
            <Gallery />
            <SeeMore />
        </article>
    )
}

export default Campus
