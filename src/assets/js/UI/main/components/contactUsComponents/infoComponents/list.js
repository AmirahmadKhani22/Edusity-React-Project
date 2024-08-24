import {IoIosMail} from "react-icons/io"
import {BiSolidPhoneCall} from "react-icons/bi"
import {FaLocationDot} from "react-icons/fa6"

function List() {
    const iconSize = 35
    return (
        <ul>
            <li>
                <div className="icon-container">
                    <IoIosMail 
                        color="#212EA0" 
                        size={iconSize} 
                    />
                </div>
                Contact@GreatStack.dev
            </li>
            <li>
                <div className="icon-container">
                    <BiSolidPhoneCall 
                        color="#212EA0" 
                        size={iconSize} 
                    />
                </div>
                +1 123-456-7890
            </li>
            <li>
                <div className="icon-container">
                    <FaLocationDot 
                        color="#212EA0" 
                        size={iconSize} 
                    />
                </div>
                77 Massachusetts Ave, Cambridge MA 02139, United States
            </li>
        </ul>
    )
}

export default List
