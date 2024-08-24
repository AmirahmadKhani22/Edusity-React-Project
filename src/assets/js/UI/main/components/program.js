import MainTitle from './partsTitle.js'
import Gallery from './programComponents/gallery.js'

function Program() {
    return (
        <article id="program" className="main-part">
            <MainTitle 
                description="OUR PROGRAM"
                title="What We Offer"
            />
            <Gallery />
        </article>
    )
}

export default Program
