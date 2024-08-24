function phoneInputEffect(DOMElement) {
    if(DOMElement.type === "tel") {
        var handleOnInput = function (event) {
            const currentValue = event.target.value
            if(currentValue) {
                if(currentValue.at(0) !== "+") {
                    DOMElement.value = currentValue.replace(currentValue.at(0) , "")
                }
                if(currentValue.at(1) === "0") {
                    DOMElement.value = currentValue.replace(currentValue.at(1) , "")
                }
            }
        }
        return {
            effect: () => {
                DOMElement.addEventListener("input" , handleOnInput)
            },
            cleanUp : () => {
                DOMElement.removeEventListener("input" , handleOnInput)
            },
        }
    } else {
        return null
    }
}

export default phoneInputEffect
