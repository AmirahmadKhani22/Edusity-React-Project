import {useState} from 'react'
import Input from './formComponents/input.js'
import MessageBox from './formComponents/message.js'
import ReCAPTCHA from './formComponents/reCAPTCHA.js'
import Submit from './formComponents/submit.js'

function Form() {
    const [isReCAPTCHAChecked , setReCAPTCHAState] = useState(false)
    const [isSubmitted , setIsSubmitted] = useState(false)
    const formId = "contact-us-form"
    const handleSubmit = event => {
        event.preventDefault()
        if(isReCAPTCHAChecked) {
            event.target.reset()
            setIsSubmitted(current => !current)
            setReCAPTCHAState(current => !current)
        } else {
            alert("The reCAPTCHA not checked!")
        }
    }

    return (
        <form 
            id={formId}
            onSubmit={handleSubmit}
            method="POST"
            action="#contact-us"
        >
            <Input 
                type="text" 
                label="Your Name:"
                placeholder="Enter your name"
                name="contact-us-name"
                id="name"
                formId={formId}
            />
            <Input 
                type="tel" 
                label="Phone Number:"
                placeholder="Enter your mobile number: +..."
                name="contact-us-phone"
                id="phone"
                formId={formId}
            />
            <Input 
                type="email" 
                label="Your Email:"
                placeholder="Enter your email"
                name="contact-us-email"
                id="email"
                formId={formId}
            />
            <MessageBox 
                id="message-box"
                formId={formId}
                label="Write your messages here:"
                name="contact-us-message"
                placeholder="Enter your messages"
            />
            <ReCAPTCHA 
                setReCAPTCHAState={setReCAPTCHAState}
                isSubmitted={isSubmitted}
            />
            <Submit />
        </form>
    )
}

export default Form
