import Student from './slideComponents/student.js'

function Slide({
    className,
    img,
    name, 
    shortInfo,
    description,
}) {
    return (
        <div className={className}>
            <Student 
                img={img}
                name={name}
                shortInfo={shortInfo}
            />
            <p className="description">
                {description}
            </p>
        </div>
    )
}

export default Slide
