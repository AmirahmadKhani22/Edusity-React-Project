import collegeVideoPoster from './../../../../../../img/program/college-video-poster.png'

function Poster({showVideo}) {
    const handleShowVideo = event => showVideo(true)
    return (
        <div className="poster">
            <img src={collegeVideoPoster} alt="about us video poster"/>
            <button onClick={handleShowVideo} />
        </div>
    )
}

export default Poster
