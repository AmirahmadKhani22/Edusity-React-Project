import useInputsEffect from '../../../../../hooks/useFormInputsEffect.js'

function Input({
    type,
    label,
    placeholder,
    name,
    id,
    formId,
}) {
    const ref = useInputsEffect()
    
    return (
        <div className="input-container">
            <label
                form={formId}
                htmlFor={id}
            >
                {label}
            </label>
            <input 
                ref={ref}
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                required={true}
            />
        </div>
    )
}

export default Input
