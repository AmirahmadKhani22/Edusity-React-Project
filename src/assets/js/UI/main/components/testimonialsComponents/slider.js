import {useRef , useEffect} from 'react'
import Swiper from 'swiper'
import swiperConfig from './sliderConfig.js'
import SliderWrapper from './sliderWrapper.js'
import Buttons from './buttons.js'


function Slider() {
    const sliderRef = useRef(null)
    useEffect(() => {
        const swiper = new Swiper(swiperConfig.slider , swiperConfig.settings)
    })

    return (
        <div className="slider-container">
            <div 
                ref={sliderRef} 
                id="testimonials-swiper"
                className="swiper slider"
            >
                <SliderWrapper />
            </div>
            <Buttons 
                classNames={[
                    "swiper-button-prev previous-btn",
                    "swiper-button-next next-btn"
                ]} 
            />
        </div>
    )
}

export default Slider
