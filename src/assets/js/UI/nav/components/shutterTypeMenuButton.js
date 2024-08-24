import {RiMenu4Fill} from "react-icons/ri"
import {IoClose} from "react-icons/io5"

function ShutterMenuButton({displayMenu , buttonOnClick}) {
    const config = {
        color: "#fff",
        size: 35,
    }
    return (
        <button className='nav-shutter-menu-button' onClick={buttonOnClick}>
            {
                displayMenu ?
                    <IoClose 
                        color={config.color} 
                        size={config.size} 
                    />:
                    <RiMenu4Fill 
                        color={config.color} 
                        size={config.size} 
                    />                    
            }
        </button>
    )
}

export default ShutterMenuButton
