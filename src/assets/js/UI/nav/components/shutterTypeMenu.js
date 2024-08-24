import {useState} from 'react'
import ShutterMenuButton from './shutterTypeMenuButton.js'
import MenuItems from './menuItems.js'

function ShutterMenu() {
    const [displayMenu , setDisplayMenu] = useState(false)
    const menuClassName = `shutter-nav-menu-container${displayMenu ? " show-shutter-nav-menu-container" : ""}`
    const buttonOnClick = event => setDisplayMenu(!displayMenu)
    
    return (
        <>
            <ShutterMenuButton displayMenu={displayMenu} buttonOnClick={buttonOnClick} />
            <div className={menuClassName}>
                <ul className='shutter-nav-menu'>
                    <MenuItems />
                </ul>
            </div>
        </>
    )
}

export default ShutterMenu
