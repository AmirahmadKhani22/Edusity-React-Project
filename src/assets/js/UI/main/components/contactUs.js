import MainTitle from  './partsTitle.js'
import Info from './contactUsComponents/info.js'
import Form from './contactUsComponents/form.js'

function ContactUs() {
    return (
        <article id="contact-us" className="main-part">
            <MainTitle 
                description="CONTACT US"
                title="Get in Touch"
            />
            <Info />
            <Form />
        </article>
    )
}

export default ContactUs
