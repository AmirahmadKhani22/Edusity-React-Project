import useTransitionEffect from './../../../hooks/useMenuItemsTransitionEffect.js'

function Item({content , link}) {
    const windowPosition = useTransitionEffect()

    let href = `#${link}-`
    let onClickHandler = event => {
        if(windowPosition) {
            window.scroll(0 , windowPosition.program)
        }
    }
    if(content === "home") {
        href = ""
        onClickHandler = null
    }


    return (
        <>
            <li className='nav-menu-item'>
                <a 
                    href={href}
                    className='nav-menu-item-link'
                    onClick={onClickHandler}
                >
                    {content}
                </a>
            </li>
        </>
    )
}

export default Item
