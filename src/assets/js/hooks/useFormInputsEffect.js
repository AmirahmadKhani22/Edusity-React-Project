import {useRef , useEffect} from 'react'
import focusBlurEffect from './formHooks/focusBlur.js'
import phoneInputEffect from './formHooks/phoneInput.js'

function useFormInputsEffect() {
    const ref = useRef(null)
    useEffect(() => {
        const DOMElement = ref.current
        const focusBlur = focusBlurEffect(DOMElement)
        const phoneInput = phoneInputEffect(DOMElement)
        focusBlur.effect()
        phoneInput?.effect()
        return () => {
            focusBlur.cleanUp()
            phoneInput?.cleanUp()
        }
    })
    return ref
}

export default useFormInputsEffect
