const handleOnFocus = function (event) {
    this.style.outline = "3px solid #cdd0ff"
}
const handleOnBlur = function (event) {
    this.style.outline = "none"
}

function focusBlurEffect(DOMElement) {
    return {
        effect: () => {
            DOMElement.addEventListener("focus" , handleOnFocus)
            DOMElement.addEventListener("blur" , handleOnBlur)
        },
        cleanUp: () => {
            DOMElement.removeEventListener("focus" , handleOnFocus)
            DOMElement.removeEventListener("blur" , handleOnBlur)
        },
    }
}

export default focusBlurEffect
