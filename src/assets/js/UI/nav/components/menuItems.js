import Item from './menuItemComponent.js'

function MenuItems() {
    const menuItemsContent = [
        "Home",
        "Program",
        "About us",
        "Campus",
        "Testimonials",
        "Contact us"
    ]
    return (
        <>
            {
                menuItemsContent.map((item , index) => {
                    const link = item.trim().replace(/\ /g , "-")
                    return <Item 
                        key={link + "-" + index}
                        content={item}
                        link={link}
                    />
                })
            }
        </>
    )
}

export default MenuItems
