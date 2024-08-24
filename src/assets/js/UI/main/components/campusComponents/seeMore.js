import {LuMoveRight} from "react-icons/lu"

function SeeMore() {
    return (
        <div className="see-more">
            <a 
                className="link"
                href="#see-more"
            >
                <div className="content">
                    <span className="text">See More Here</span>
                    <LuMoveRight color="#fff" size={20} className="icon" />
                </div>
            </a>
        </div>
    )
}

export default SeeMore
