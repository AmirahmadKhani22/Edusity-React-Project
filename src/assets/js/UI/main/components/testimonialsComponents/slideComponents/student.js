import Profile from './profile.js'
import ShortInfo from './shortInfo.js'

function Student({
    img,
    name, 
    shortInfo,
}) {
    return (
        <div className="student">
            <Profile 
                img={img}
                name={name}
            />
            <ShortInfo
                name={name}
                info={shortInfo}
            />
        </div>
    )
}

export default Student
