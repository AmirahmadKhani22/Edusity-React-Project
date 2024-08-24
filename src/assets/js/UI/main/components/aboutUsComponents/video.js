import {useState} from 'react'
import Poster from './videoCompnonets/poster.js'
import Source from './videoCompnonets/source.js'

function AboutUs() {
    const [showVideo , setShowHideVideo] = useState(false)

    return (
        <div className="video-container">
            <Poster showVideo={setShowHideVideo} />
            {showVideo && <Source hideVideo={setShowHideVideo} />} 
        </div>
    )
}

export default AboutUs
