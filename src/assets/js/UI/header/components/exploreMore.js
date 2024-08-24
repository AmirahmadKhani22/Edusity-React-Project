import {LuMoveRight} from "react-icons/lu"

function ExploreMore() {
    return (
        <div className='header-explore-more'>
            <a href="#explore-more" className='header-explore-more-link'>
                <span className='header-explore-more-text'>
                    Explore more
                </span>
                <LuMoveRight color="#434343" size={22} className="icon" />
            </a>
        </div>
    )
}

export default ExploreMore
