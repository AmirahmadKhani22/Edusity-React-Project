import collegeVideoPoster from './../../../../../../img/program/college-video-poster.png'
import collegeVideo from './../../../../../../video/college.mp4'

function Source({hideVideo}) {
    const handleHideVideo = event => {
        event.stopPropagation()
        hideVideo(false)
    }
    const handleVideoOnClick = event => {
        event.stopPropagation()
    } 

    return (
        <div 
            className="video-wrapper" 
            onClick={handleHideVideo}
        >
            <video 
                controls={true} 
                poster={collegeVideoPoster}
                onClick={handleVideoOnClick}
            >
                <source 
                    src={collegeVideo} 
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default Source
