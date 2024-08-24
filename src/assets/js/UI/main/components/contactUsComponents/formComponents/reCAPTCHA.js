import {useRef , useEffect} from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

function RECAPTCHA({setReCAPTCHAState , isSubmitted}) {
    const ref = useRef(null)
    useEffect(() => {
        if(isSubmitted) {
            ref.current.reset()
        }
    })
    const handleOnChange = event => setReCAPTCHAState(current => !current)
    
    return <ReCAPTCHA 
                ref={ref}
                id="recaptcha"
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                type="image"
                size="normal"
                theme="light"
                badge="inline"
                onChange={handleOnChange}
            />
}

export default RECAPTCHA
