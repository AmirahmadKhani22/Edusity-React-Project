import useInputsEffect from '../../../../../hooks/useFormInputsEffect.js'

function MessageBox({
    id,
    formId,
    label,
    name,
    placeholder
}) {
    const ref = useInputsEffect()

    return (
        <div className="message-container">
            <label
                form={formId}
                htmlFor={id}
            >
                {label}
            </label>
            <textarea 
                ref={ref}
                id={id}
                form={formId}
                name={name}
                placeholder={placeholder}
                required={true}
                rows={6}
                style={{resize: "none"}}
            />
        </div>
    )
}

export default MessageBox
