import {useState} from 'react'
import {FaArrowLeft} from "react-icons/fa6"
import {FaArrowRight} from "react-icons/fa6"

function Slider({classNames}) {
    const [display , setDisplay] = useState(false)
    window.addEventListener("resize" , event => {
        if(window.innerWidth < 500) {
            setDisplay(current => !current)
        } else {
            setDisplay(current => current)
        }
    })
    if(display) {
        return null
    }
    const iconSize = 25
    const iconColor = "#fff"
    return (
        <>
            <button className={classNames[0]}>
                <FaArrowLeft 
                    color={iconColor} 
                    size={iconSize}
                />
            </button>
            <button className={classNames[1]}>
                <FaArrowRight 
                    color={iconColor} 
                    size={iconSize}
                />
            </button>
        </>
    )
}

export default Slider
