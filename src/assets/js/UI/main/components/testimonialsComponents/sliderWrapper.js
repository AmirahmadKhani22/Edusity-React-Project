import Slide from './slide.js'
import StudentsData from './../../../../../../sampleData/slidesData.json'
import EmilyWilliams_1 from './../../../../../img/testimonials/EmilyWilliams_1.png'
import EmilyWilliams_2 from './../../../../../img/testimonials/EmilyWilliams_2.png'
import WilliamJackson_1 from './../../../../../img/testimonials/WilliamJackson_1.png'
import WilliamJackson_2 from './../../../../../img/testimonials/WilliamJackson_2.png'

function Wrapper() {
    return (
        <div className="swiper-wrapper wrapper">
            {
                StudentsData.map((item , index) => {
                    const imgs =[EmilyWilliams_1 , WilliamJackson_1 , EmilyWilliams_2 , WilliamJackson_2]
                    const key = `${index}-${item.name}`
                    return <Slide 
                            key={key}
                            className="swiper-slide slide"
                            img={imgs[index]}
                            name={item.name}
                            shortInfo={item.university}
                            description={item.description}
                        />
                })
            }
        </div>
    )
}

export default Wrapper
