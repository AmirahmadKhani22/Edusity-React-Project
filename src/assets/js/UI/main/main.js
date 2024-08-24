import Program from './components/program.js'
import AboutUs from './components/aboutUs.js'
import Campus from './components/campus.js'
import Testimonials from './components/testimonials.js'
import ContactUs from './components/contactUs.js'

function Main() {
    return (
        <main className="main-container">
            <Program />
            <AboutUs />
            <Campus />
            <Testimonials />
            <ContactUs />
        </main>
    )
}

export default Main
