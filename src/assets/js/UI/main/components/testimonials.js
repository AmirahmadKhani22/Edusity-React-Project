import MainTitle from './partsTitle.js'
import Slider from './testimonialsComponents/slider.js'

function Testimonials() {
    return (
        <article id="testimonials" className="main-part">
            <MainTitle 
                description="TESTIMONIALS"
                title="What Student Says"
            />
            <Slider />
        </article>
    )
}

export default Testimonials
